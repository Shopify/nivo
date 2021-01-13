'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var d3Scale = require('d3-scale');
var core = require('@nivo/core');
var colors = require('@nivo/colors');
var legends = require('@nivo/legends');
var reactSpring = require('react-spring');
var d3Shape = require('d3-shape');
var tooltip = require('@nivo/tooltip');
var PropTypes = _interopDefault(require('prop-types'));

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var RadarShapes = React.memo(function (_ref) {
  var data = _ref.data,
      key = _ref.item,
      colorByKey = _ref.colorByKey,
      radiusScale = _ref.radiusScale,
      angleStep = _ref.angleStep,
      curveInterpolator = _ref.curveInterpolator,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      fillOpacity = _ref.fillOpacity,
      blendMode = _ref.blendMode;
  var theme = core.useTheme();
  var getBorderColor = colors.useInheritedColor(borderColor, theme);
  var lineGenerator = React.useMemo(function () {
    return d3Shape.lineRadial().radius(function (d) {
      return radiusScale(d);
    }).angle(function (d, i) {
      return i * angleStep;
    }).curve(curveInterpolator);
  }, [radiusScale, angleStep, curveInterpolator]);
  var _useMotionConfig = core.useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;
  var animatedPath = core.useAnimatedPath(lineGenerator(data.map(function (d) {
    return d[key];
  })));
  var animatedProps = reactSpring.useSpring({
    fill: colorByKey[key],
    stroke: getBorderColor({
      key: key,
      color: colorByKey[key]
    }),
    config: springConfig,
    immediate: !animate
  });
  return React__default.createElement(reactSpring.animated.path, {
    key: key,
    d: animatedPath,
    fill: animatedProps.fill,
    fillOpacity: fillOpacity,
    stroke: animatedProps.stroke,
    strokeWidth: borderWidth,
    style: {
      mixBlendMode: blendMode
    }
  });
});
RadarShapes.displayName = 'RadarShapes';

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

var textAnchorFromAngle = function textAnchorFromAngle(_angle) {
  var angle = core.radiansToDegrees(_angle) + 90;
  if (angle <= 10 || angle >= 350 || angle >= 170 && angle <= 190) return 'middle';
  if (angle > 180) return 'end';
  return 'start';
};
var renderLabel = function renderLabel(label, theme, labelComponent) {
  if (labelComponent === undefined) {
    return React__default.createElement("text", {
      style: theme.axis.ticks.text,
      dominantBaseline: "central",
      textAnchor: label.anchor
    }, label.id);
  }
  return React__default.createElement(labelComponent, label);
};
var RadarGridLabels = React.memo(function (_ref) {
  var radius = _ref.radius,
      angles = _ref.angles,
      indices = _ref.indices,
      labelComponent = _ref.label,
      labelOffset = _ref.labelOffset;
  var theme = core.useTheme();
  var _useMotionConfig = core.useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;
  var labels = indices.map(function (index, i) {
    var position = core.positionFromAngle(angles[i], radius + labelOffset);
    var textAnchor = textAnchorFromAngle(angles[i]);
    return _objectSpread2({
      id: index,
      angle: core.radiansToDegrees(angles[i]),
      anchor: textAnchor
    }, position);
  });
  var springs = reactSpring.useSprings(labels.length, labels.map(function (label) {
    return {
      transform: "translate(".concat(label.x, ", ").concat(label.y, ")"),
      config: springConfig,
      immediate: !animate
    };
  }));
  return springs.map(function (animatedProps, index) {
    var label = labels[index];
    return React__default.createElement(reactSpring.animated.g, {
      key: label.id,
      transform: animatedProps.transform
    }, renderLabel(label, theme, labelComponent));
  });
});
RadarGridLabels.displayName = 'RadarGridLabels';

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

var RadarGridLevelCircular = React.memo(function (_ref) {
  var radius = _ref.radius;
  var theme = core.useTheme();
  var _useMotionConfig = core.useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;
  var animatedProps = reactSpring.useSpring({
    radius: radius,
    config: springConfig,
    immediate: !animate
  });
  return React__default.createElement(reactSpring.animated.circle, Object.assign({
    fill: "none",
    r: reactSpring.to(animatedProps.radius, function (value) {
      return Math.max(value, 0);
    })
  }, theme.grid.line));
});
RadarGridLevelCircular.displayName = 'RadarGridLevelCircular';
var RadarGridLevelLinear = React.memo(function (_ref2) {
  var radius = _ref2.radius,
      angleStep = _ref2.angleStep,
      dataLength = _ref2.dataLength;
  var theme = core.useTheme();
  var radarLineGenerator = React.useMemo(function () {
    return d3Shape.lineRadial().angle(function (i) {
      return i * angleStep;
    }).radius(radius).curve(d3Shape.curveLinearClosed);
  }, [angleStep, radius]);
  var points = Array.from({
    length: dataLength
  }, function (_, i) {
    return i;
  });
  var animatedPath = core.useAnimatedPath(radarLineGenerator(points));
  return React__default.createElement(reactSpring.animated.path, Object.assign({
    fill: "none",
    d: animatedPath
  }, theme.grid.line));
});
RadarGridLevelLinear.displayName = 'RadarGridLevelLinear';
var RadarGridLevels = React.memo(function (_ref3) {
  var shape = _ref3.shape,
      props = _objectWithoutProperties(_ref3, ["shape"]);
  return shape === 'circular' ? React__default.createElement(RadarGridLevelCircular, {
    radius: props.radius
  }) : React__default.createElement(RadarGridLevelLinear, props);
});
RadarGridLevels.displayName = 'RadarGridLevels';

var RadarGrid = React.memo(function (_ref) {
  var indices = _ref.indices,
      levels = _ref.levels,
      shape = _ref.shape,
      radius = _ref.radius,
      angleStep = _ref.angleStep,
      label = _ref.label,
      labelOffset = _ref.labelOffset;
  var theme = core.useTheme();
  var _useMemo = React.useMemo(function () {
    return {
      radii: Array.from({
        length: levels
      }).map(function (_, i) {
        return radius / levels * (i + 1);
      }).reverse(),
      angles: Array.from({
        length: indices.length
      }, function (_, i) {
        return i * angleStep - Math.PI / 2;
      })
    };
  }, [indices, levels, radius, angleStep]),
      radii = _useMemo.radii,
      angles = _useMemo.angles;
  return React__default.createElement("g", null, angles.map(function (angle, i) {
    var position = core.positionFromAngle(angle, radius);
    return React__default.createElement("line", Object.assign({
      key: "axis.".concat(i),
      x1: 0,
      y1: 0,
      x2: position.x,
      y2: position.y
    }, theme.grid));
  }), radii.map(function (radius, i) {
    return React__default.createElement(RadarGridLevels, {
      key: "level.".concat(i),
      shape: shape,
      radius: radius,
      angleStep: angleStep,
      dataLength: indices.length
    });
  }), React__default.createElement(RadarGridLabels, {
    radius: radius,
    angles: angles,
    indices: indices,
    labelOffset: labelOffset,
    label: label
  }));
});
RadarGrid.displayName = 'RadarGrid';

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var RadarTooltipItem = React.memo(function (_ref) {
  var datum = _ref.datum,
      keys = _ref.keys,
      index = _ref.index,
      colorByKey = _ref.colorByKey,
      radius = _ref.radius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      arcGenerator = _ref.arcGenerator,
      tooltipFormat = _ref.tooltipFormat;
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHover = _useState2[0],
      setIsHover = _useState2[1];
  var theme = core.useTheme();
  var _useTooltip = tooltip.useTooltip(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;
  var tooltipFormatter = core.useValueFormatter(tooltipFormat);
  var tooltip$1 = React.useMemo(function () {
    var rows = keys.map(function (key) {
      return [React__default.createElement(tooltip.Chip, {
        key: key,
        color: colorByKey[key]
      }), key, tooltipFormatter(datum[key], key)];
    });
    rows.sort(function (a, b) {
      return a[2] - b[2];
    });
    rows.reverse();
    return React__default.createElement(tooltip.TableTooltip, {
      title: React__default.createElement("strong", null, index),
      rows: rows,
      theme: theme
    });
  }, [datum, keys, index, colorByKey, theme, tooltipFormatter]);
  var showItemTooltip = React.useCallback(function (event) {
    setIsHover(true);
    showTooltipFromEvent(tooltip$1, event);
  }, [showTooltipFromEvent, tooltip$1]);
  var hideItemTooltip = React.useCallback(function () {
    setIsHover(false);
    hideTooltip();
  }, [hideTooltip, setIsHover]);
  var _useMemo = React.useMemo(function () {
    var position = core.positionFromAngle(startAngle + (endAngle - startAngle) * 0.5 - Math.PI / 2, radius);
    return {
      path: arcGenerator({
        startAngle: startAngle,
        endAngle: endAngle
      }),
      tipX: position.x,
      tipY: position.y
    };
  }, [startAngle, endAngle, radius, arcGenerator]),
      path = _useMemo.path,
      tipX = _useMemo.tipX,
      tipY = _useMemo.tipY;
  return React__default.createElement(React__default.Fragment, null, isHover && React__default.createElement("line", {
    x1: 0,
    y1: 0,
    x2: tipX,
    y2: tipY,
    style: theme.crosshair.line
  }), React__default.createElement("path", {
    d: path,
    fill: "#F00",
    fillOpacity: 0,
    onMouseEnter: showItemTooltip,
    onMouseMove: showItemTooltip,
    onMouseLeave: hideItemTooltip
  }));
});
RadarTooltipItem.displayName = 'RadarTooltipItem';

var RadarTooltip = React.memo(function (_ref) {
  var data = _ref.data,
      keys = _ref.keys,
      getIndex = _ref.getIndex,
      colorByKey = _ref.colorByKey,
      radius = _ref.radius,
      angleStep = _ref.angleStep,
      tooltipFormat = _ref.tooltipFormat;
  var arc = d3Shape.arc().outerRadius(radius).innerRadius(0);
  var halfAngleStep = angleStep * 0.5;
  var rootStartAngle = -halfAngleStep;
  return React__default.createElement("g", null, data.map(function (d) {
    var index = getIndex(d);
    var startAngle = rootStartAngle;
    var endAngle = startAngle + angleStep;
    rootStartAngle += angleStep;
    return React__default.createElement(RadarTooltipItem, {
      key: index,
      datum: d,
      keys: keys,
      index: index,
      colorByKey: colorByKey,
      startAngle: startAngle,
      endAngle: endAngle,
      radius: radius,
      arcGenerator: arc,
      tooltipFormat: tooltipFormat
    });
  }));
});
RadarTooltip.displayName = 'RadarTooltip';

var RadarDots = function RadarDots(_ref) {
  var data = _ref.data,
      keys = _ref.keys,
      getIndex = _ref.getIndex,
      colorByKey = _ref.colorByKey,
      radiusScale = _ref.radiusScale,
      angleStep = _ref.angleStep,
      symbol = _ref.symbol,
      size = _ref.size,
      color = _ref.color,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      enableLabel = _ref.enableLabel,
      label = _ref.label,
      labelFormat = _ref.labelFormat,
      labelYOffset = _ref.labelYOffset;
  var theme = core.useTheme();
  var fillColor = colors.getInheritedColorGenerator(color, theme);
  var strokeColor = colors.getInheritedColorGenerator(borderColor, theme);
  var getLabel = core.getLabelGenerator(label, labelFormat);
  var points = React.useMemo(function () {
    return data.reduce(function (acc, datum, i) {
      var index = getIndex(datum);
      keys.forEach(function (key) {
        var pointData = {
          index: index,
          key: key,
          value: datum[key],
          color: colorByKey[key]
        };
        acc.push({
          key: "".concat(key, ".").concat(index),
          label: enableLabel ? getLabel(pointData) : null,
          style: _objectSpread2({
            fill: fillColor(pointData),
            stroke: strokeColor(pointData)
          }, core.positionFromAngle(angleStep * i - Math.PI / 2, radiusScale(datum[key]))),
          data: pointData
        });
      });
      return acc;
    }, []);
  }, [data, getIndex, colorByKey, enableLabel, getLabel, fillColor, strokeColor, angleStep, radiusScale]);
  return points.map(function (point) {
    return React__default.createElement(core.DotsItem, {
      key: point.key,
      x: point.style.x,
      y: point.style.y,
      symbol: symbol,
      size: size,
      color: point.style.fill,
      borderWidth: borderWidth,
      borderColor: point.style.stroke,
      label: point.label,
      labelYOffset: labelYOffset,
      theme: theme,
      datum: point.data
    });
  });
};
RadarDots.defaultProps = {
  size: 6,
  color: {
    from: 'color'
  },
  borderWidth: 0,
  borderColor: {
    from: 'color'
  },
  enableLabel: false,
  label: 'value'
};

var RadarPropTypes = _objectSpread2({
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  indexBy: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]).isRequired,
  maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]).isRequired,
  curve: core.closedCurvePropType.isRequired,
  borderWidth: PropTypes.number.isRequired,
  borderColor: colors.inheritedColorPropType.isRequired,
  gridLevels: PropTypes.number,
  gridShape: PropTypes.oneOf(['circular', 'linear']),
  gridLabel: PropTypes.func,
  gridLabelOffset: PropTypes.number,
  enableDots: PropTypes.bool.isRequired,
  dotSymbol: PropTypes.func,
  dotSize: PropTypes.number,
  dotColor: colors.inheritedColorPropType,
  dotBorderWidth: PropTypes.number,
  dotBorderColor: colors.inheritedColorPropType,
  enableDotLabel: PropTypes.bool,
  dotLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  dotLabelFormat: PropTypes.string,
  dotLabelYOffset: PropTypes.number,
  colors: colors.ordinalColorsPropType.isRequired,
  fillOpacity: PropTypes.number.isRequired,
  blendMode: core.blendModePropType.isRequired,
  isInteractive: PropTypes.bool.isRequired,
  tooltipFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  legends: PropTypes.arrayOf(PropTypes.shape(legends.LegendPropShape)).isRequired,
  role: PropTypes.string.isRequired
}, core.motionPropTypes);
var RadarDefaultProps = {
  maxValue: 'auto',
  curve: 'linearClosed',
  borderWidth: 2,
  borderColor: {
    from: 'color'
  },
  gridLevels: 5,
  gridShape: 'circular',
  gridLabelOffset: 16,
  enableDots: true,
  colors: {
    scheme: 'nivo'
  },
  fillOpacity: 0.25,
  blendMode: 'normal',
  isInteractive: true,
  legends: [],
  role: 'img',
  animate: true,
  motionDamping: 13,
  motionStiffness: 90
};

var Radar = React.memo(function (_ref) {
  var data = _ref.data,
      keys = _ref.keys,
      indexBy = _ref.indexBy,
      maxValue = _ref.maxValue,
      curve = _ref.curve,
      partialMargin = _ref.margin,
      width = _ref.width,
      height = _ref.height,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      gridLevels = _ref.gridLevels,
      gridShape = _ref.gridShape,
      gridLabel = _ref.gridLabel,
      gridLabelOffset = _ref.gridLabelOffset,
      enableDots = _ref.enableDots,
      dotSymbol = _ref.dotSymbol,
      dotSize = _ref.dotSize,
      dotColor = _ref.dotColor,
      dotBorderWidth = _ref.dotBorderWidth,
      dotBorderColor = _ref.dotBorderColor,
      enableDotLabel = _ref.enableDotLabel,
      dotLabel = _ref.dotLabel,
      dotLabelFormat = _ref.dotLabelFormat,
      dotLabelYOffset = _ref.dotLabelYOffset,
      colors$1 = _ref.colors,
      fillOpacity = _ref.fillOpacity,
      blendMode = _ref.blendMode,
      isInteractive = _ref.isInteractive,
      tooltipFormat = _ref.tooltipFormat,
      legends$1 = _ref.legends,
      role = _ref.role;
  var getIndex = core.usePropertyAccessor(indexBy);
  var indices = React.useMemo(function () {
    return data.map(getIndex);
  }, [data, getIndex]);
  var _useDimensions = core.useDimensions(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;
  var theme = core.useTheme();
  var getColor = colors.useOrdinalColorScale(colors$1, 'key');
  var colorByKey = React.useMemo(function () {
    return keys.reduce(function (mapping, key, index) {
      mapping[key] = getColor({
        key: key,
        index: index
      });
      return mapping;
    }, {});
  }, [keys, getColor]);
  var _useMemo = React.useMemo(function () {
    var computedMaxValue = maxValue !== 'auto' ? maxValue : Math.max.apply(Math, _toConsumableArray(data.reduce(function (acc, d) {
      return [].concat(_toConsumableArray(acc), _toConsumableArray(keys.map(function (key) {
        return d[key];
      })));
    }, [])));
    var radius = Math.min(innerWidth, innerHeight) / 2;
    var radiusScale = d3Scale.scaleLinear().range([0, radius]).domain([0, computedMaxValue]);
    return {
      radius: radius,
      radiusScale: radiusScale,
      centerX: innerWidth / 2,
      centerY: innerHeight / 2,
      angleStep: Math.PI * 2 / data.length
    };
  }, [keys, indexBy, data, maxValue, innerWidth, innerHeight]),
      radius = _useMemo.radius,
      radiusScale = _useMemo.radiusScale,
      centerX = _useMemo.centerX,
      centerY = _useMemo.centerY,
      angleStep = _useMemo.angleStep;
  var legendData = keys.map(function (key) {
    return {
      id: key,
      label: key,
      color: colorByKey[key]
    };
  });
  var curveInterpolator = core.useCurveInterpolation(curve);
  return React__default.createElement(core.SvgWrapper, {
    width: outerWidth,
    height: outerHeight,
    margin: margin,
    theme: theme,
    role: role
  }, React__default.createElement("g", {
    transform: "translate(".concat(centerX, ", ").concat(centerY, ")")
  }, React__default.createElement(RadarGrid, {
    levels: gridLevels,
    shape: gridShape,
    radius: radius,
    angleStep: angleStep,
    indices: indices,
    label: gridLabel,
    labelOffset: gridLabelOffset
  }), keys.map(function (key) {
    return React__default.createElement(RadarShapes, Object.assign({
      key: key
    }, {
      data: data,
      item: key,
      colorByKey: colorByKey,
      radiusScale: radiusScale,
      angleStep: angleStep,
      curveInterpolator: curveInterpolator,
      borderWidth: borderWidth,
      borderColor: borderColor,
      fillOpacity: fillOpacity,
      blendMode: blendMode
    }));
  }), isInteractive && React__default.createElement(RadarTooltip, {
    data: data,
    keys: keys,
    getIndex: getIndex,
    colorByKey: colorByKey,
    radius: radius,
    angleStep: angleStep,
    tooltipFormat: tooltipFormat
  }), enableDots && React__default.createElement(RadarDots, {
    data: data,
    keys: keys,
    getIndex: getIndex,
    radiusScale: radiusScale,
    angleStep: angleStep,
    symbol: dotSymbol,
    size: dotSize,
    colorByKey: colorByKey,
    color: dotColor,
    borderWidth: dotBorderWidth,
    borderColor: dotBorderColor,
    enableLabel: enableDotLabel,
    label: dotLabel,
    labelFormat: dotLabelFormat,
    labelYOffset: dotLabelYOffset
  })), legends$1.map(function (legend, i) {
    return React__default.createElement(legends.BoxLegendSvg, Object.assign({
      key: i
    }, legend, {
      containerWidth: width,
      containerHeight: height,
      data: legendData,
      theme: theme
    }));
  }));
});
Radar.displayName = 'Radar';
Radar.defaultProps = RadarDefaultProps;
var Radar$1 = core.withContainer(Radar);

var ResponsiveRadar = function ResponsiveRadar(props) {
  return React__default.createElement(core.ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React__default.createElement(Radar$1, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

exports.Radar = Radar$1;
exports.RadarDefaultProps = RadarDefaultProps;
exports.RadarDots = RadarDots;
exports.RadarPropTypes = RadarPropTypes;
exports.ResponsiveRadar = ResponsiveRadar;
//# sourceMappingURL=nivo-radar.cjs.js.map
