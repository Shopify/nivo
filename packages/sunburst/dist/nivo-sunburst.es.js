import React, { useMemo, useCallback, createElement, Fragment } from 'react';
import { useTheme, useMotionConfig, getLabelGenerator, radiansToDegrees, midAngle, positionFromAngle, usePropertyAccessor, useValueFormatter, Container, useDimensions, bindDefs, SvgWrapper, ResponsiveWrapper } from '@nivo/core';
import { useInheritedColor, useOrdinalColorScale } from '@nivo/colors';
import { useTransition, animated, useSpring, to } from 'react-spring';
import pick from 'lodash/pick';
import sortBy from 'lodash/sortBy';
import cloneDeep from 'lodash/cloneDeep';
import { arc } from 'd3-shape';
import { useTooltip, BasicTooltip } from '@nivo/tooltip';
import { partition, hierarchy } from 'd3-hierarchy';

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var sliceStyle = {
  pointerEvents: 'none'
};
var SunburstLabels = function SunburstLabels(_ref) {
  var label = _ref.label,
      nodes = _ref.nodes,
      _ref$skipAngle = _ref.skipAngle,
      skipAngle = _ref$skipAngle === void 0 ? 0 : _ref$skipAngle,
      textColor = _ref.textColor;
  var theme = useTheme();
  var getTextColor = useInheritedColor(textColor, theme);

  var _useMotionConfig = useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var getLabel = useMemo(function () {
    return getLabelGenerator(label);
  }, [label]);
  var labelNodes = useMemo(function () {
    var filteredNodes = nodes.filter(function (node) {
      return node.depth === 1;
    });

    var _filteredNodes = _slicedToArray(filteredNodes, 1),
        node = _filteredNodes[0];

    var innerRadius = Math.sqrt(node.y0);
    var outerRadius = Math.sqrt(node.y1);
    var centerRadius = innerRadius + (outerRadius - innerRadius) / 2;
    return filteredNodes.map(function (node) {
      var startAngle = node.x0;
      var endAngle = node.x1;
      var angle = Math.abs(endAngle - startAngle);
      var angleDeg = radiansToDegrees(angle);
      var middleAngle = midAngle({
        startAngle: startAngle,
        endAngle: endAngle
      }) - Math.PI / 2;
      var position = positionFromAngle(middleAngle, centerRadius);
      return {
        angle: angle,
        angleDeg: angleDeg,
        data: node.data,
        endAngle: endAngle,
        middleAngle: middleAngle,
        position: position
      };
    }).filter(function (node) {
      return node.angleDeg > skipAngle;
    });
  }, [nodes, skipAngle]);
  var transition = useTransition(labelNodes, {
    key: function key(node) {
      return node.data.id;
    },
    initial: function initial(node) {
      return {
        opacity: 1,
        transform: "translate(".concat(node.position.x, ",").concat(node.position.y, ")")
      };
    },
    from: function from(node) {
      return {
        opacity: 0,
        transform: "translate(".concat(node.position.x, ",").concat(node.position.y, ")")
      };
    },
    enter: function enter(node) {
      return {
        opacity: 1,
        transform: "translate(".concat(node.position.x, ",").concat(node.position.y, ")")
      };
    },
    update: function update(node) {
      return {
        opacity: 1,
        transform: "translate(".concat(node.position.x, ",").concat(node.position.y, ")")
      };
    },
    leave: {
      opacity: 0
    },
    config: springConfig,
    immediate: !animate
  });
  return React.createElement(React.Fragment, null, transition(function (_ref2, node) {
    var opacity = _ref2.opacity,
        transform = _ref2.transform;
    return React.createElement(animated.g, {
      key: node.data.id,
      transform: transform,
      style: _objectSpread2(_objectSpread2({}, sliceStyle), {}, {
        opacity: opacity
      })
    }, React.createElement("text", {
      textAnchor: "middle",
      style: _objectSpread2(_objectSpread2({}, theme.labels.text), {}, {
        fill: getTextColor(node.data)
      })
    }, getLabel(node.data)));
  }));
};

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var useEventHandlers = function useEventHandlers(_ref) {
  var data = _ref.data,
      isInteractive = _ref.isInteractive,
      onClickHandler = _ref.onClick,
      onMouseEnterHandler = _ref.onMouseEnter,
      onMouseLeaveHandler = _ref.onMouseLeave,
      onMouseMoveHandler = _ref.onMouseMove,
      tooltip = _ref.tooltip;

  var _useTooltip = useTooltip(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleTooltip = useCallback(function (event) {
    return showTooltipFromEvent(createElement(tooltip, data), event);
  }, [data, showTooltipFromEvent, tooltip]);
  var onClick = useCallback(function (event) {
    return onClickHandler === null || onClickHandler === void 0 ? void 0 : onClickHandler(data, event);
  }, [data, onClickHandler]);
  var onMouseEnter = useCallback(function (event) {
    onMouseEnterHandler === null || onMouseEnterHandler === void 0 ? void 0 : onMouseEnterHandler(data, event);
    handleTooltip(event);
  }, [data, handleTooltip, onMouseEnterHandler]);
  var onMouseLeave = useCallback(function (event) {
    onMouseLeaveHandler === null || onMouseLeaveHandler === void 0 ? void 0 : onMouseLeaveHandler(data, event);
    hideTooltip();
  }, [data, hideTooltip, onMouseLeaveHandler]);
  var onMouseMove = useCallback(function (event) {
    onMouseMoveHandler === null || onMouseMoveHandler === void 0 ? void 0 : onMouseMoveHandler(data, event);
    handleTooltip(event);
  }, [data, handleTooltip, onMouseMoveHandler]);
  return useMemo(function () {
    if (!isInteractive) {
      return {
        onClick: undefined,
        onMouseEnter: undefined,
        onMouseLeave: undefined,
        onMouseMove: undefined
      };
    }

    return {
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseMove: onMouseMove
    };
  }, [isInteractive, onClick, onMouseEnter, onMouseLeave, onMouseMove]);
};
var useSunburst = function useSunburst(_ref2) {
  var childColor = _ref2.childColor,
      colors = _ref2.colors,
      cornerRadius = _ref2.cornerRadius,
      data = _ref2.data,
      id = _ref2.id,
      value = _ref2.value,
      valueFormat = _ref2.valueFormat,
      radius = _ref2.radius;
  var theme = useTheme();
  var getColor = useOrdinalColorScale(colors, 'id');
  var getChildColor = useInheritedColor(childColor, theme);
  var getId = usePropertyAccessor(id);
  var getValue = usePropertyAccessor(value);
  var formatValue = useValueFormatter(valueFormat);
  var nodes = useMemo(function () {
    var _hierarchy$value;

    var partition$1 = partition().size([2 * Math.PI, radius * radius]);
    var hierarchy$1 = hierarchy(data).sum(getValue);
    var descendants = partition$1(cloneDeep(hierarchy$1)).descendants();
    var total = (_hierarchy$value = hierarchy$1.value) !== null && _hierarchy$value !== void 0 ? _hierarchy$value : 0;
    return sortBy(descendants, 'depth').reduce(function (acc, descendant) {
      var node = _objectSpread2({
        value: 0
      }, pick(descendant, ['x0', 'y0', 'x1', 'y1', 'depth', 'height', 'parent', 'value']));

      var value = node.value;
      var id = getId(descendant.data);
      var percentage = 100 * value / total;
      var data = {
        color: descendant.data.color,
        data: descendant.data,
        depth: node.depth,
        formattedValue: valueFormat ? formatValue(value) : "".concat(percentage.toFixed(2), "%"),
        id: id,
        percentage: percentage,
        value: value
      };
      var parent = acc.find(function (computed) {
        return node.parent && computed.data.id === getId(node.parent.data);
      });
      var color = node.depth === 1 || childColor === 'noinherit' ? getColor(data) : parent ? getChildColor(parent.data) : descendant.data.color;
      return [].concat(_toConsumableArray(acc), [_objectSpread2(_objectSpread2({}, node), {}, {
        data: _objectSpread2(_objectSpread2({}, data), {}, {
          color: color,
          parent: parent
        })
      })]);
    }, []);
  }, [radius, data, getValue, getId, valueFormat, formatValue, childColor, getColor, getChildColor]);
  var arcGenerator = useMemo(function () {
    return arc().startAngle(function (d) {
      return d.x0;
    }).endAngle(function (d) {
      return d.x1;
    }).innerRadius(function (d) {
      return Math.sqrt(d.y0);
    }).outerRadius(function (d) {
      return Math.sqrt(d.y1);
    }).cornerRadius(cornerRadius);
  }, [cornerRadius]);
  return {
    arcGenerator: arcGenerator,
    nodes: nodes
  };
};
var useSunburstLayerContext = function useSunburstLayerContext(_ref3) {
  var nodes = _ref3.nodes,
      arcGenerator = _ref3.arcGenerator,
      centerX = _ref3.centerX,
      centerY = _ref3.centerY,
      radius = _ref3.radius;
  return useMemo(function () {
    return {
      nodes: nodes,
      arcGenerator: arcGenerator,
      centerX: centerX,
      centerY: centerY,
      radius: radius
    };
  }, [nodes, arcGenerator, centerX, centerY, radius]);
};

var SunburstArc = function SunburstArc(_ref) {
  var _node$data$fill;

  var node = _ref.node,
      arcGenerator = _ref.arcGenerator,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      props = _objectWithoutProperties(_ref, ["node", "arcGenerator", "borderWidth", "borderColor"]);

  var _useMotionConfig = useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var handlers = useEventHandlers(_objectSpread2({
    data: node.data
  }, props));

  var _useSpring = useSpring({
    x0: node.x0,
    x1: node.x1,
    y0: node.y0,
    y1: node.y1,
    config: springConfig,
    immediate: !animate
  }),
      x0 = _useSpring.x0,
      x1 = _useSpring.x1,
      y0 = _useSpring.y0,
      y1 = _useSpring.y1;

  return React.createElement(animated.path, Object.assign({
    d: to([x0, x1, y0, y1], function (x0, x1, y0, y1) {
      return arcGenerator(_objectSpread2(_objectSpread2({}, node), {}, {
        x0: x0,
        x1: x1,
        y0: y0,
        y1: y1
      }));
    }),
    fill: (_node$data$fill = node.data.fill) !== null && _node$data$fill !== void 0 ? _node$data$fill : node.data.color,
    stroke: borderColor,
    strokeWidth: borderWidth
  }, handlers));
};

var SunburstTooltip = function SunburstTooltip(_ref) {
  var color = _ref.color,
      id = _ref.id,
      formattedValue = _ref.formattedValue;
  return React.createElement(BasicTooltip, {
    id: id,
    value: formattedValue,
    enableChip: true,
    color: color
  });
};

var defaultProps = {
  id: 'id',
  value: 'value',
  cornerRadius: 0,
  layers: ['slices', 'sliceLabels'],
  colors: {
    scheme: 'nivo'
  },
  borderWidth: 1,
  borderColor: 'white',
  childColor: {
    from: 'color'
  },
  role: 'img',
  enableSliceLabels: false,
  sliceLabel: 'formattedValue',
  sliceLabelsSkipAngle: 0,
  sliceLabelsTextColor: {
    theme: 'labels.text.fill'
  },
  isInteractive: true,
  animate: false,
  motionConfig: 'gentle',
  defs: [],
  fill: [],
  tooltip: SunburstTooltip
};

var InnerSunburst = function InnerSunburst(_ref) {
  var data = _ref.data,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultProps.id : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? defaultProps.value : _ref$value,
      valueFormat = _ref.valueFormat,
      _ref$layers = _ref.layers,
      layers = _ref$layers === void 0 ? defaultProps.layers : _ref$layers,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultProps.colors : _ref$colors,
      _ref$childColor = _ref.childColor,
      childColor = _ref$childColor === void 0 ? defaultProps.childColor : _ref$childColor,
      partialMargin = _ref.margin,
      width = _ref.width,
      height = _ref.height,
      _ref$cornerRadius = _ref.cornerRadius,
      cornerRadius = _ref$cornerRadius === void 0 ? defaultProps.cornerRadius : _ref$cornerRadius,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? defaultProps.borderWidth : _ref$borderWidth,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? defaultProps.borderColor : _ref$borderColor,
      _ref$enableSliceLabel = _ref.enableSliceLabels,
      enableSliceLabels = _ref$enableSliceLabel === void 0 ? defaultProps.enableSliceLabels : _ref$enableSliceLabel,
      _ref$sliceLabel = _ref.sliceLabel,
      sliceLabel = _ref$sliceLabel === void 0 ? defaultProps.sliceLabel : _ref$sliceLabel,
      _ref$sliceLabelsSkipA = _ref.sliceLabelsSkipAngle,
      sliceLabelsSkipAngle = _ref$sliceLabelsSkipA === void 0 ? defaultProps.sliceLabelsSkipAngle : _ref$sliceLabelsSkipA,
      _ref$sliceLabelsTextC = _ref.sliceLabelsTextColor,
      sliceLabelsTextColor = _ref$sliceLabelsTextC === void 0 ? defaultProps.sliceLabelsTextColor : _ref$sliceLabelsTextC,
      _ref$defs = _ref.defs,
      defs = _ref$defs === void 0 ? defaultProps.defs : _ref$defs,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? defaultProps.fill : _ref$fill,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? defaultProps.role : _ref$role,
      _ref$isInteractive = _ref.isInteractive,
      isInteractive = _ref$isInteractive === void 0 ? defaultProps.isInteractive : _ref$isInteractive,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? defaultProps.tooltip : _ref$tooltip,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onMouseMove = _ref.onMouseMove;

  var _useDimensions = useDimensions(width, height, partialMargin),
      innerHeight = _useDimensions.innerHeight,
      innerWidth = _useDimensions.innerWidth,
      margin = _useDimensions.margin,
      outerHeight = _useDimensions.outerHeight,
      outerWidth = _useDimensions.outerWidth;

  var _useMemo = useMemo(function () {
    var radius = Math.min(innerWidth, innerHeight) / 2;
    return {
      radius: radius,
      centerX: innerWidth / 2,
      centerY: innerHeight / 2
    };
  }, [innerHeight, innerWidth]),
      centerX = _useMemo.centerX,
      centerY = _useMemo.centerY,
      radius = _useMemo.radius;

  var _useSunburst = useSunburst({
    childColor: childColor,
    colors: colors,
    cornerRadius: cornerRadius,
    data: data,
    id: id,
    radius: radius,
    value: value,
    valueFormat: valueFormat
  }),
      arcGenerator = _useSunburst.arcGenerator,
      nodes = _useSunburst.nodes;

  var filteredNodes = useMemo(function () {
    return nodes.filter(function (node) {
      return node.depth > 0;
    });
  }, [nodes]);
  var boundDefs = bindDefs(defs, nodes, fill, {
    dataKey: 'data',
    colorKey: 'data.color',
    targetKey: 'data.fill'
  });
  var layerById = {
    slices: null,
    sliceLabels: null
  };

  if (layers.includes('slices')) {
    layerById.slices = React.createElement("g", {
      key: "slices",
      transform: "translate(".concat(centerX, ",").concat(centerY, ")")
    }, filteredNodes.map(function (node) {
      return React.createElement(SunburstArc, {
        key: node.data.id,
        node: node,
        arcGenerator: arcGenerator,
        borderWidth: borderWidth,
        borderColor: borderColor,
        isInteractive: isInteractive,
        tooltip: tooltip,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onMouseMove: onMouseMove
      });
    }));
  }

  if (enableSliceLabels && layers.includes('sliceLabels')) {
    layerById.sliceLabels = React.createElement(SunburstLabels, {
      key: "sliceLabels",
      nodes: nodes,
      label: sliceLabel,
      skipAngle: sliceLabelsSkipAngle,
      textColor: sliceLabelsTextColor
    });
  }

  var layerContext = useSunburstLayerContext({
    nodes: filteredNodes,
    arcGenerator: arcGenerator,
    centerX: centerX,
    centerY: centerY,
    radius: radius
  });
  return React.createElement(SvgWrapper, {
    width: outerWidth,
    height: outerHeight,
    defs: boundDefs,
    margin: margin,
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

var Sunburst = function Sunburst(_ref2) {
  var _ref2$isInteractive = _ref2.isInteractive,
      isInteractive = _ref2$isInteractive === void 0 ? defaultProps.isInteractive : _ref2$isInteractive,
      _ref2$animate = _ref2.animate,
      animate = _ref2$animate === void 0 ? defaultProps.animate : _ref2$animate,
      _ref2$motionConfig = _ref2.motionConfig,
      motionConfig = _ref2$motionConfig === void 0 ? defaultProps.motionConfig : _ref2$motionConfig,
      theme = _ref2.theme,
      otherProps = _objectWithoutProperties(_ref2, ["isInteractive", "animate", "motionConfig", "theme"]);

  return React.createElement(Container, {
    isInteractive: isInteractive,
    animate: animate,
    motionConfig: motionConfig,
    theme: theme
  }, React.createElement(InnerSunburst, Object.assign({
    isInteractive: isInteractive
  }, otherProps)));
};

var ResponsiveSunburst = function ResponsiveSunburst(props) {
  return React.createElement(ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React.createElement(Sunburst, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

export { ResponsiveSunburst, Sunburst, defaultProps, useEventHandlers, useSunburst, useSunburstLayerContext };
//# sourceMappingURL=nivo-sunburst.es.js.map
