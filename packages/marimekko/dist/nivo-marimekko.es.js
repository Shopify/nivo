import React, { useMemo, useCallback, createElement, Fragment } from 'react';
import { useValueFormatter, useTheme, useMotionConfig, Container, useDimensions, bindDefs, SvgWrapper, ResponsiveWrapper } from '@nivo/core';
import { Grid, Axes } from '@nivo/axes';
import { BoxLegendSvg } from '@nivo/legends';
import _get from 'lodash/get';
import { stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stack } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { useOrdinalColorScale, useInheritedColor } from '@nivo/colors';
import { animated, to, useTransition } from 'react-spring';
import { useTooltip, BasicTooltip } from '@nivo/tooltip';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var defaultProps = {
  layout: 'vertical',
  offset: 'none',
  outerPadding: 0,
  innerPadding: 3,
  layers: ['grid', 'axes', 'bars', 'legends'],
  enableGridX: false,
  enableGridY: true,
  colors: {
    scheme: 'nivo'
  },
  borderWidth: 0,
  borderColor: {
    from: 'color',
    modifiers: [['darker', 1]]
  },
  isInteractive: true,
  animate: true,
  motionConfig: 'gentle'
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

var offsetById = {
  expand: stackOffsetExpand,
  diverging: stackOffsetDiverging,
  none: stackOffsetNone,
  silouhette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle
};

var useDataDimensions = function useDataDimensions(rawDimensions) {
  return useMemo(function () {
    var dimensions = {};
    var dimensionIds = [];
    rawDimensions.forEach(function (dimension) {
      dimensionIds.push(dimension.id);
      dimensions[dimension.id] = typeof dimension.value === 'function' ? dimension.value : function (datum) {
        return _get(datum, dimension.value, 0);
      };
    });
    return {
      dimensionIds: dimensionIds,
      dimensions: dimensions
    };
  }, [rawDimensions]);
};
var useStack = function useStack(dimensionIds, dimensions, offset) {
  return useMemo(function () {
    var offsetFunction = offsetById[offset];
    return stack().keys(dimensionIds).value(function (datum, key) {
      return dimensions[key](datum);
    }).offset(offsetFunction);
  }, [dimensionIds, dimensions, offset]);
};
var useStackedData = function useStackedData(stack, data) {
  return useMemo(function () {
    var stacked = stack(data);
    var allValues = [];
    stacked.forEach(function (dimension) {
      dimension.forEach(function (datum) {
        allValues.push(datum[0]);
        allValues.push(datum[1]);
      });
    });
    var min = Math.min.apply(Math, allValues);
    var max = Math.max.apply(Math, allValues);
    return {
      stacked: stacked,
      min: min,
      max: max
    };
  }, [stack, data]);
};
var useDimensionsScale = function useDimensionsScale(min, max, width, height, layout) {
  return useMemo(function () {
    if (layout === 'vertical') {
      return scaleLinear().domain([max, min]).range([0, height]);
    }

    return scaleLinear().domain([min, max]).range([0, width]);
  }, [min, max, width, height, layout]);
};
var useNormalizedData = function useNormalizedData(data, id, value) {
  var getId = typeof id === 'function' ? id : function (datum) {
    return _get(datum, id);
  };
  var getValue = typeof value === 'function' ? value : function (datum) {
    return _get(datum, value, 0);
  };
  return useMemo(function () {
    var normalized = [];
    data.forEach(function (datum, index) {
      var datumId = getId(datum);
      var datumValue = getValue(datum);
      normalized.push({
        index: index,
        id: datumId,
        value: datumValue,
        data: datum
      });
    });
    return normalized;
  }, [data, getId, getValue]);
};
var useThicknessScale = function useThicknessScale(_ref) {
  var data = _ref.data,
      width = _ref.width,
      height = _ref.height,
      layout = _ref.layout,
      outerPadding = _ref.outerPadding,
      innerPadding = _ref.innerPadding;
  return useMemo(function () {
    var totalValue = data.reduce(function (acc, datum) {
      return acc + datum.value;
    }, 0);
    var thicknessScale = scaleLinear().domain([0, totalValue]);
    var totalPadding = 2 * outerPadding + (data.length - 1) * innerPadding;

    if (layout === 'vertical') {
      thicknessScale.range([0, width - totalPadding]);
    } else {
      thicknessScale.range([0, height - totalPadding]);
    }

    return thicknessScale;
  }, [data, width, height, layout]);
};
var useComputedData = function useComputedData(_ref2) {
  var data = _ref2.data,
      stacked = _ref2.stacked,
      dimensionIds = _ref2.dimensionIds,
      valueFormat = _ref2.valueFormat,
      thicknessScale = _ref2.thicknessScale,
      dimensionsScale = _ref2.dimensionsScale,
      colors = _ref2.colors,
      layout = _ref2.layout,
      outerPadding = _ref2.outerPadding,
      innerPadding = _ref2.innerPadding;
  var getColor = useOrdinalColorScale(colors, 'id');
  var formatValue = useValueFormatter(valueFormat);
  return useMemo(function () {
    var computedData = [];
    var position = outerPadding;
    data.forEach(function (datum) {
      var thickness = thicknessScale(datum.value);

      var computedDatum = _objectSpread2(_objectSpread2({}, datum), {}, {
        x: layout === 'vertical' ? position : 0,
        y: layout === 'vertical' ? 0 : position,
        width: layout === 'vertical' ? thickness : 0,
        height: layout === 'vertical' ? 0 : thickness,
        dimensions: []
      });

      var allPositions = [];
      var totalSize = 0;
      position += thickness + innerPadding;
      dimensionIds.forEach(function (dimensionId) {
        var dimension = stacked.find(function (stack) {
          return stack.key === dimensionId;
        });

        if (dimension) {
          var dimensionPoint = dimension[datum.index];
          var dimensionDatum = {
            id: dimensionId,
            datum: computedDatum,
            value: dimensionPoint[1] - dimensionPoint[0],
            formattedValue: formatValue(dimensionPoint[1] - dimensionPoint[0]),
            color: 'rgba(0, 0, 0, 0)',
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
          var position0 = dimensionsScale(dimensionPoint[0]);
          var position1 = dimensionsScale(dimensionPoint[1]);

          if (layout === 'vertical') {
            dimensionDatum.x = computedDatum.x;
            dimensionDatum.y = Math.min(position0, position1);
            dimensionDatum.width = computedDatum.width;
            dimensionDatum.height = Math.max(position0, position1) - dimensionDatum.y;
            allPositions.push(dimensionDatum.y);
            totalSize += dimensionDatum.height;
          } else {
            dimensionDatum.x = Math.min(position0, position1);
            dimensionDatum.y = computedDatum.y;
            dimensionDatum.width = Math.max(position0, position1) - dimensionDatum.x;
            dimensionDatum.height = computedDatum.height;
            allPositions.push(dimensionDatum.x);
            totalSize += dimensionDatum.width;
          }

          dimensionDatum.color = getColor(dimensionDatum);
          computedDatum.dimensions.push(dimensionDatum);
        }

        if (layout === 'vertical') {
          computedDatum.y = Math.min.apply(Math, allPositions);
          computedDatum.height = totalSize;
        } else {
          computedDatum.x = Math.min.apply(Math, allPositions);
          computedDatum.width = totalSize;
        }
      });
      computedData.push(computedDatum);
    });
    return computedData;
  }, [data, stacked, dimensionIds, thicknessScale, dimensionsScale, layout, outerPadding, innerPadding, getColor, formatValue]);
};
var useBars = function useBars(data, borderColor, borderWidth) {
  var theme = useTheme();
  var getBorderColor = useInheritedColor(borderColor, theme);
  return useMemo(function () {
    var all = [];
    data.forEach(function (datum) {
      datum.dimensions.forEach(function (dimension) {
        all.push(_objectSpread2(_objectSpread2({
          key: "".concat(datum.id, "-").concat(dimension.id)
        }, dimension), {}, {
          borderColor: getBorderColor(dimension),
          borderWidth: borderWidth
        }));
      });
    });
    return all;
  }, [data, borderWidth, getBorderColor]);
};
var useMarimekko = function useMarimekko(_ref3) {
  var data = _ref3.data,
      id = _ref3.id,
      value = _ref3.value,
      valueFormat = _ref3.valueFormat,
      rawDimensions = _ref3.dimensions,
      layout = _ref3.layout,
      offset = _ref3.offset,
      outerPadding = _ref3.outerPadding,
      innerPadding = _ref3.innerPadding,
      colors = _ref3.colors,
      borderColor = _ref3.borderColor,
      borderWidth = _ref3.borderWidth,
      width = _ref3.width,
      height = _ref3.height;

  var _useDataDimensions = useDataDimensions(rawDimensions),
      dimensionIds = _useDataDimensions.dimensionIds,
      dimensions = _useDataDimensions.dimensions;

  var stack = useStack(dimensionIds, dimensions, offset);

  var _useStackedData = useStackedData(stack, data),
      stacked = _useStackedData.stacked,
      min = _useStackedData.min,
      max = _useStackedData.max;

  var normalizedData = useNormalizedData(data, id, value);
  var thicknessScale = useThicknessScale({
    data: normalizedData,
    width: width,
    height: height,
    layout: layout,
    outerPadding: outerPadding,
    innerPadding: innerPadding
  });
  var dimensionsScale = useDimensionsScale(min, max, width, height, layout);
  var computedData = useComputedData({
    data: normalizedData,
    stacked: stacked,
    dimensionIds: dimensionIds,
    valueFormat: valueFormat,
    thicknessScale: thicknessScale,
    dimensionsScale: dimensionsScale,
    colors: colors,
    layout: layout,
    outerPadding: outerPadding,
    innerPadding: innerPadding
  });
  var bars = useBars(computedData, borderColor, borderWidth);
  return {
    computedData: computedData,
    bars: bars,
    thicknessScale: thicknessScale,
    dimensionsScale: dimensionsScale,
    dimensionIds: dimensionIds
  };
};
var useLayerContext = function useLayerContext(_ref4) {
  var data = _ref4.data,
      bars = _ref4.bars,
      thicknessScale = _ref4.thicknessScale,
      dimensionsScale = _ref4.dimensionsScale;
  return useMemo(function () {
    return {
      data: data,
      bars: bars,
      thicknessScale: thicknessScale,
      dimensionsScale: dimensionsScale
    };
  }, [data, bars, thicknessScale, dimensionsScale]);
};
var useLegendData = function useLegendData(dimensionIds, bars) {
  var legendData = [];
  dimensionIds.forEach(function (dimensionId) {
    var bar = bars.find(function (bar) {
      return bar.id === dimensionId;
    });

    if (bar) {
      legendData.push({
        id: dimensionId,
        label: dimensionId,
        color: bar.color,
        fill: bar.fill
      });
    }
  });
  return legendData;
};

var Bar = function Bar(_ref) {
  var _bar$fill;

  var bar = _ref.bar,
      animatedProps = _ref.animatedProps,
      isInteractive = _ref.isInteractive,
      tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave;

  var _useTooltip = useTooltip(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var showTooltip = useCallback(function (event) {
    return showTooltipFromEvent(createElement(tooltip, {
      bar: bar
    }), event);
  }, [showTooltipFromEvent, tooltip, bar]);
  var handleClick = useCallback(function (event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(bar, event);
  }, [onClick, bar]);
  var handleMouseEnter = useCallback(function (event) {
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(bar, event);
    showTooltip(event);
  }, [showTooltip, bar]);
  var handleMouseMove = useCallback(function (event) {
    onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(bar, event);
    showTooltip(event);
  }, [showTooltip, bar]);
  var handleMouseLeave = useCallback(function (event) {
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(bar, event);
    hideTooltip();
  }, [onMouseLeave, bar, hideTooltip]);
  return React.createElement(animated.rect, {
    x: animatedProps.x,
    y: animatedProps.y,
    width: to(animatedProps.width, function (value) {
      return Math.max(value, 0);
    }),
    height: to(animatedProps.height, function (value) {
      return Math.max(value, 0);
    }),
    fill: (_bar$fill = bar.fill) !== null && _bar$fill !== void 0 ? _bar$fill : animatedProps.color,
    stroke: animatedProps.borderColor,
    strokeWidth: bar.borderWidth,
    onClick: isInteractive ? handleClick : undefined,
    onMouseEnter: isInteractive ? handleMouseEnter : undefined,
    onMouseMove: isInteractive ? handleMouseMove : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined
  });
};

var Bars = function Bars(_ref) {
  var bars = _ref.bars,
      isInteractive = _ref.isInteractive,
      tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave;

  var _useMotionConfig = useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var transition = useTransition(bars, {
    key: function key(bar) {
      return bar.key;
    },
    initial: function initial(bar) {
      return {
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        color: bar.color,
        opacity: 1,
        borderColor: bar.borderColor
      };
    },
    from: function from(bar) {
      return {
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        color: bar.color,
        opacity: 0,
        borderColor: bar.borderColor
      };
    },
    enter: function enter(bar) {
      return {
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        color: bar.color,
        opacity: 1,
        borderColor: bar.borderColor
      };
    },
    update: function update(bar) {
      return {
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        color: bar.color,
        opacity: 1,
        borderColor: bar.borderColor
      };
    },
    leave: function leave(bar) {
      return {
        opacity: 0,
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        color: bar.color
      };
    },
    config: springConfig,
    immediate: !animate
  });
  return React.createElement(React.Fragment, null, transition(function (style, bar) {
    return React.createElement(Bar, {
      key: bar.key,
      bar: bar,
      animatedProps: style,
      isInteractive: isInteractive,
      tooltip: tooltip,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave
    });
  }));
};

var BarTooltip = function BarTooltip(_ref) {
  var bar = _ref.bar;
  return React.createElement(BasicTooltip, {
    id: "".concat(bar.datum.id, " - ").concat(bar.id),
    value: bar.formattedValue,
    enableChip: true,
    color: bar.color
  });
};

var InnerMarimekko = function InnerMarimekko(_ref) {
  var data = _ref.data,
      id = _ref.id,
      value = _ref.value,
      valueFormat = _ref.valueFormat,
      dimensions = _ref.dimensions,
      width = _ref.width,
      height = _ref.height,
      partialMargin = _ref.margin,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? defaultProps.layout : _ref$layout,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? defaultProps.offset : _ref$offset,
      _ref$outerPadding = _ref.outerPadding,
      outerPadding = _ref$outerPadding === void 0 ? defaultProps.outerPadding : _ref$outerPadding,
      _ref$innerPadding = _ref.innerPadding,
      innerPadding = _ref$innerPadding === void 0 ? defaultProps.innerPadding : _ref$innerPadding,
      _ref$layers = _ref.layers,
      layers = _ref$layers === void 0 ? defaultProps.layers : _ref$layers,
      axisTop = _ref.axisTop,
      axisRight = _ref.axisRight,
      axisBottom = _ref.axisBottom,
      axisLeft = _ref.axisLeft,
      _ref$enableGridX = _ref.enableGridX,
      enableGridX = _ref$enableGridX === void 0 ? defaultProps.enableGridX : _ref$enableGridX,
      gridXValues = _ref.gridXValues,
      _ref$enableGridY = _ref.enableGridY,
      enableGridY = _ref$enableGridY === void 0 ? defaultProps.enableGridY : _ref$enableGridY,
      gridYValues = _ref.gridYValues,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors,
      _ref$defs = _ref.defs,
      defs = _ref$defs === void 0 ? [] : _ref$defs,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? [] : _ref$fill,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? defaultProps.borderWidth : _ref$borderWidth,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? defaultProps.borderColor : _ref$borderColor,
      _ref$isInteractive = _ref.isInteractive,
      isInteractive = _ref$isInteractive === void 0 ? defaultProps.isInteractive : _ref$isInteractive,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? BarTooltip : _ref$tooltip,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      _ref$legends = _ref.legends,
      legends = _ref$legends === void 0 ? [] : _ref$legends,
      role = _ref.role;

  var _useDimensions = useDimensions(width, height, partialMargin),
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight,
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight;

  var _useMarimekko = useMarimekko({
    data: data,
    id: id,
    value: value,
    dimensions: dimensions,
    valueFormat: valueFormat,
    layout: layout,
    offset: offset,
    outerPadding: outerPadding,
    innerPadding: innerPadding,
    colors: colors,
    borderColor: borderColor,
    borderWidth: borderWidth,
    width: innerWidth,
    height: innerHeight
  }),
      computedData = _useMarimekko.computedData,
      bars = _useMarimekko.bars,
      thicknessScale = _useMarimekko.thicknessScale,
      dimensionsScale = _useMarimekko.dimensionsScale,
      dimensionIds = _useMarimekko.dimensionIds;

  var layerById = {
    grid: null,
    axes: null,
    bars: null,
    legends: null
  };
  var boundDefs = bindDefs(defs, bars, fill);

  if (layers.includes('bars')) {
    layerById.bars = React.createElement(Bars, {
      key: "bars",
      bars: bars,
      isInteractive: isInteractive,
      tooltip: tooltip,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave
    });
  }

  var xScale = layout === 'vertical' ? thicknessScale : dimensionsScale;
  var yScale = layout === 'vertical' ? dimensionsScale : thicknessScale;

  if (layers.includes('grid')) {
    layerById.grid = React.createElement(Grid, {
      key: "grid",
      xScale: enableGridX ? xScale : undefined,
      yScale: enableGridY ? yScale : undefined,
      width: innerWidth,
      height: innerHeight,
      xValues: gridXValues,
      yValues: gridYValues
    });
  }

  if (layers.includes('axes')) {
    layerById.axes = React.createElement(Axes, {
      key: "axes",
      xScale: xScale,
      yScale: yScale,
      width: innerWidth,
      height: innerHeight,
      top: axisTop,
      right: axisRight,
      bottom: axisBottom,
      left: axisLeft
    });
  }

  var legendData = useLegendData(dimensionIds, bars);

  if (layers.includes('legends')) {
    layerById.legends = React.createElement("g", {
      key: "legends"
    }, legends.map(function (legend, i) {
      return React.createElement(BoxLegendSvg, Object.assign({
        key: i
      }, legend, {
        containerWidth: innerWidth,
        containerHeight: innerHeight,
        data: legendData
      }));
    }));
  }

  var layerContext = useLayerContext({
    data: computedData,
    bars: bars,
    thicknessScale: thicknessScale,
    dimensionsScale: dimensionsScale
  });
  return React.createElement(SvgWrapper, {
    width: outerWidth,
    height: outerHeight,
    margin: margin,
    defs: boundDefs,
    role: role
  }, layers.map(function (layer, i) {
    if (layerById[layer] !== undefined) {
      return layerById[layer];
    }

    if (typeof layer === 'function') {
      return React.createElement(Fragment, {
        key: i
      }, createElement(layer, layerContext));
    }

    return null;
  }));
};

var Marimekko = function Marimekko(_ref2) {
  var _ref2$isInteractive = _ref2.isInteractive,
      isInteractive = _ref2$isInteractive === void 0 ? defaultProps.isInteractive : _ref2$isInteractive,
      _ref2$animate = _ref2.animate,
      animate = _ref2$animate === void 0 ? defaultProps.animate : _ref2$animate,
      _ref2$motionConfig = _ref2.motionConfig,
      motionConfig = _ref2$motionConfig === void 0 ? defaultProps.motionConfig : _ref2$motionConfig,
      otherProps = _objectWithoutProperties(_ref2, ["isInteractive", "animate", "motionConfig"]);

  return React.createElement(Container, {
    theme: otherProps.theme,
    isInteractive: isInteractive,
    animate: animate,
    motionConfig: motionConfig
  }, React.createElement(InnerMarimekko, Object.assign({
    isInteractive: isInteractive,
    animate: animate,
    motionConfig: motionConfig
  }, otherProps)));
};

var ResponsiveMarimekko = function ResponsiveMarimekko(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(Marimekko, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

export { Marimekko, ResponsiveMarimekko, defaultProps, offsetById };
//# sourceMappingURL=nivo-marimekko.es.js.map
