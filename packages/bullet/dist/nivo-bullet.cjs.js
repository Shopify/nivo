'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@nivo/core');
var reactSpring = require('react-spring');
var axes = require('@nivo/axes');
var tooltip = require('@nivo/tooltip');
var d3Scale = require('d3-scale');

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

var BulletMarkersItem = function BulletMarkersItem(_ref) {
  var _ref$animatedProps = _ref.animatedProps,
      color = _ref$animatedProps.color,
      transform = _ref$animatedProps.transform,
      x = _ref$animatedProps.x,
      y1 = _ref$animatedProps.y1,
      y2 = _ref$animatedProps.y2,
      data = _ref.data,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseMove = _ref.onMouseMove,
      _onMouseLeave = _ref.onMouseLeave,
      _onClick = _ref.onClick;
  return React__default.createElement(reactSpring.animated.line, {
    transform: transform,
    x1: x,
    x2: x,
    y1: y1,
    y2: y2,
    fill: "none",
    stroke: color,
    strokeWidth: "5",
    onMouseMove: function onMouseMove(event) {
      return _onMouseMove(data, event);
    },
    onMouseEnter: function onMouseEnter(event) {
      return _onMouseEnter(data, event);
    },
    onMouseLeave: function onMouseLeave(event) {
      return _onMouseLeave(data, event);
    },
    onClick: function onClick(event) {
      return _onClick(data, event);
    }
  });
};

var BulletRectsItem = function BulletRectsItem(_ref) {
  var _ref$animatedProps = _ref.animatedProps,
      x = _ref$animatedProps.x,
      y = _ref$animatedProps.y,
      width = _ref$animatedProps.width,
      height = _ref$animatedProps.height,
      color = _ref$animatedProps.color,
      data = _ref.data,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseMove = _ref.onMouseMove,
      _onMouseLeave = _ref.onMouseLeave,
      _onClick = _ref.onClick;
  return React__default.createElement(reactSpring.animated.rect, {
    x: x,
    y: y,
    width: reactSpring.to(width, function (value) {
      return Math.max(value, 0);
    }),
    height: reactSpring.to(height, function (value) {
      return Math.max(value, 0);
    }),
    fill: color,
    onMouseMove: function onMouseMove(event) {
      return _onMouseMove(data, event);
    },
    onMouseEnter: function onMouseEnter(event) {
      return _onMouseEnter(data, event);
    },
    onMouseLeave: function onMouseLeave(event) {
      return _onMouseLeave(data, event);
    },
    onClick: function onClick(event) {
      return _onClick(data, event);
    }
  });
};

var defaultProps = {
  layout: 'horizontal',
  reverse: false,
  spacing: 30,
  axisPosition: 'after',
  titlePosition: 'before',
  titleAlign: 'middle',
  titleRotation: 0,
  titleOffsetX: 0,
  titleOffsetY: 0,
  rangeComponent: BulletRectsItem,
  rangeColors: 'seq:cool',
  measureComponent: BulletRectsItem,
  measureColors: 'seq:red_purple',
  markers: [],
  markerComponent: BulletMarkersItem,
  markerColors: 'seq:red_purple',
  rangeBorderWidth: 0,
  rangeBorderColor: {
    from: 'color'
  },
  measureSize: 0.4,
  measureBorderWidth: 0,
  measureBorderColor: {
    from: 'color'
  },
  markerSize: 0.6,
  isInteractive: true,
  animate: core.motionDefaultProps.animate,
  motionConfig: core.motionDefaultProps.config,
  margin: core.defaultMargin,
  role: 'img'
};

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

var stackValues = function stackValues(values, colorScale) {
  var useAverage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var normalized = _toConsumableArray(values).filter(function (v) {
    return v !== 0;
  }).sort(function (a, b) {
    return a - b;
  });

  return normalized.reduce(function (acc, v1, index) {
    var _last$v;

    var _acc$slice = acc.slice(-1),
        _acc$slice2 = _slicedToArray(_acc$slice, 1),
        last = _acc$slice2[0];

    var v0 = (_last$v = last === null || last === void 0 ? void 0 : last.v1) !== null && _last$v !== void 0 ? _last$v : 0;
    var sequentialValue = useAverage === true ? v0 + (v1 - v0) / 2 : v1;
    return [].concat(_toConsumableArray(acc), [{
      index: index,
      v0: v0,
      v1: v1,
      color: colorScale(colorScale.type === 'sequential' ? sequentialValue : index)
    }]);
  }, []);
};
var getComputeRect = function getComputeRect(_ref) {
  var layout = _ref.layout,
      reverse = _ref.reverse,
      scale = _ref.scale,
      height = _ref.height;

  if (layout === 'horizontal') {
    if (reverse === true) {
      return function (d) {
        var x = scale(d.v1);
        var w = scale(d.v0) - x;
        return {
          x: x,
          y: 0,
          width: w,
          height: height
        };
      };
    }

    return function (d) {
      var x = scale(d.v0);
      var w = scale(d.v1) - x;
      return {
        x: x,
        y: 0,
        width: w,
        height: height
      };
    };
  }

  if (reverse === true) {
    return function (d) {
      var y = scale(d.v0);
      var h = scale(d.v1) - y;
      return {
        x: 0,
        y: y,
        width: height,
        height: h
      };
    };
  }

  return function (d) {
    var y = scale(d.v1);
    var h = scale(d.v0) - y;
    return {
      x: 0,
      y: y,
      width: height,
      height: h
    };
  };
};
var computeRects = function computeRects(_ref2) {
  var data = _ref2.data,
      layout = _ref2.layout,
      reverse = _ref2.reverse,
      scale = _ref2.scale,
      height = _ref2.height;
  var computeRect = getComputeRect({
    layout: layout,
    reverse: reverse,
    scale: scale,
    height: height
  });
  return data.map(function (d) {
    return _objectSpread2({
      data: d
    }, computeRect(d));
  });
};

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

var getPositionGenerator = function getPositionGenerator(_ref) {
  var layout = _ref.layout,
      reverse = _ref.reverse,
      scale = _ref.scale,
      height = _ref.height,
      markerSize = _ref.markerSize;

  if (layout === 'horizontal') {
    return function (marker) {
      var x = scale(marker.value);
      var y = height / 2;
      var rotation = reverse === true ? 180 : 0;
      return {
        x: x,
        y: y,
        size: markerSize,
        rotation: rotation
      };
    };
  }

  return function (marker) {
    var x = height / 2;
    var y = scale(marker.value);
    var rotation = reverse === true ? 270 : 90;
    return {
      x: x,
      y: y,
      size: markerSize,
      rotation: rotation
    };
  };
};

var BulletMarkers = function BulletMarkers(_ref2) {
  var scale = _ref2.scale,
      layout = _ref2.layout,
      reverse = _ref2.reverse,
      markers = _ref2.markers,
      height = _ref2.height,
      markerSize = _ref2.markerSize,
      component = _ref2.component,
      onMouseEnter = _ref2.onMouseEnter,
      onMouseLeave = _ref2.onMouseLeave,
      onClick = _ref2.onClick;
  var getPosition = React.useMemo(function () {
    return getPositionGenerator({
      layout: layout,
      reverse: reverse,
      scale: scale,
      height: height,
      markerSize: markerSize
    });
  }, [layout, reverse, scale, height, markerSize]);

  var _useMotionConfig = core.useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var transition = reactSpring.useTransition(markers.map(function (marker) {
    return _objectSpread2(_objectSpread2({}, marker), {}, {
      position: getPosition(marker)
    });
  }), {
    key: function key(marker) {
      return "".concat(marker.index);
    },
    enter: function enter(_ref3) {
      var color = _ref3.color,
          position = _ref3.position;
      return {
        color: color,
        transform: "rotate(".concat(position.rotation, ", ").concat(position.x, ", ").concat(position.y, ")"),
        x: position.x,
        y1: position.y - position.size / 2,
        y2: position.y + position.size / 2
      };
    },
    update: function update(_ref4) {
      var color = _ref4.color,
          position = _ref4.position;
      return {
        color: color,
        transform: "rotate(".concat(position.rotation, ", ").concat(position.x, ", ").concat(position.y, ")"),
        x: position.x,
        y1: position.y - position.size / 2,
        y2: position.y + position.size / 2
      };
    },
    config: springConfig,
    immediate: !animate
  });
  return React__default.createElement(React__default.Fragment, null, transition(function (props, _ref5) {
    var position = _ref5.position,
        marker = _objectWithoutProperties(_ref5, ["position"]);

    return React__default.createElement(component, _objectSpread2(_objectSpread2(_objectSpread2({
      key: marker.index
    }, marker), position), {}, {
      animatedProps: props,
      data: marker,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick
    }));
  }));
};

var BulletRects = function BulletRects(_ref) {
  var animatedProps = _ref.animatedProps,
      data = _ref.data,
      layout = _ref.layout,
      y = _ref.y,
      component = _ref.component,
      reverse = _ref.reverse,
      scale = _ref.scale,
      height = _ref.height,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick;
  var rects = React.useMemo(function () {
    return computeRects({
      data: data,
      layout: layout,
      reverse: reverse,
      scale: scale,
      height: height
    });
  }, [data, layout, reverse, scale, height]);

  var getTransform = function getTransform(value) {
    return "translate(".concat(layout === 'horizontal' ? 0 : value, ",").concat(layout === 'horizontal' ? value : 0, ")");
  };

  var transform = animatedProps ? reactSpring.to(animatedProps.measuresY, getTransform) : getTransform(y);

  var _useMotionConfig = core.useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var transition = reactSpring.useTransition(rects, {
    key: function key(rect) {
      return "".concat(rect.data.index);
    },
    enter: function enter(rect) {
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        color: rect.data.color
      };
    },
    update: function update(rect) {
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        color: rect.data.color
      };
    },
    config: springConfig,
    immediate: !animate
  });
  return React__default.createElement(reactSpring.animated.g, {
    transform: transform
  }, transition(function (props, rect) {
    return React__default.createElement(component, {
      key: rect.data.index,
      index: rect.data.index,
      animatedProps: props,
      data: rect.data,
      x: props.x.get(),
      y: props.y.get(),
      width: reactSpring.to(props.width, function (value) {
        return Math.max(value, 0);
      }).get(),
      height: reactSpring.to(props.height, function (value) {
        return Math.max(value, 0);
      }).get(),
      color: props.color.get(),
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick
    });
  }));
};

var BulletItem = function BulletItem(_ref) {
  var _theme$labels;

  var id = _ref.id,
      scale = _ref.scale,
      layout = _ref.layout,
      reverse = _ref.reverse,
      axisPosition = _ref.axisPosition,
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? id : _ref$title,
      titlePosition = _ref.titlePosition,
      titleAlign = _ref.titleAlign,
      titleOffsetX = _ref.titleOffsetX,
      titleOffsetY = _ref.titleOffsetY,
      titleRotation = _ref.titleRotation,
      rangeComponent = _ref.rangeComponent,
      rangeColors = _ref.rangeColors,
      ranges = _ref.ranges,
      measureComponent = _ref.measureComponent,
      measureHeight = _ref.measureHeight,
      measureColors = _ref.measureColors,
      measures = _ref.measures,
      markerComponent = _ref.markerComponent,
      markerColors = _ref.markerColors,
      markerHeight = _ref.markerHeight,
      _ref$markers = _ref.markers,
      markers = _ref$markers === void 0 ? [] : _ref$markers,
      onRangeClick = _ref.onRangeClick,
      onMeasureClick = _ref.onMeasureClick,
      onMarkerClick = _ref.onMarkerClick;
  var theme = core.useTheme();

  var _useTooltip = tooltip.useTooltip(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var computedRanges = React.useMemo(function () {
    var rangeColorScale = core.getColorScale(rangeColors, scale, true);
    return stackValues(ranges, rangeColorScale);
  }, [rangeColors, ranges, scale]);
  var computedMeasures = React.useMemo(function () {
    var measureColorScale = core.getColorScale(measureColors, scale);
    return stackValues(measures, measureColorScale);
  }, [measureColors, measures, scale]);
  var computedMarkers = React.useMemo(function () {
    var markerColorScale = core.getColorScale(markerColors, scale);
    return markers.map(function (marker, index) {
      return {
        value: marker,
        index: index,
        color: markerColorScale(markerColorScale.type === 'sequential' ? marker : index)
      };
    });
  }, [markerColors, markers, scale]);
  var rangeNodes = React__default.createElement(BulletRects, {
    data: computedRanges,
    scale: scale,
    layout: layout,
    reverse: reverse,
    x: 0,
    y: 0,
    width: width,
    height: height,
    component: rangeComponent,
    onMouseEnter: function onMouseEnter(range, event) {
      showTooltipFromEvent(React__default.createElement(tooltip.BasicTooltip, {
        id: React__default.createElement("span", null, React__default.createElement("strong", null, range.v0), " to ", React__default.createElement("strong", null, range.v1)),
        enableChip: true,
        color: range.color
      }), event);
    },
    onMouseLeave: hideTooltip,
    onClick: function onClick(range, event) {
      onRangeClick === null || onRangeClick === void 0 ? void 0 : onRangeClick(_objectSpread2({
        id: id
      }, range), event);
    }
  });
  var markerNodes = React__default.createElement(BulletMarkers, {
    markers: computedMarkers,
    scale: scale,
    layout: layout,
    reverse: reverse,
    height: height,
    markerSize: markerHeight,
    component: markerComponent,
    onMouseEnter: function onMouseEnter(marker, event) {
      showTooltipFromEvent(React__default.createElement(tooltip.BasicTooltip, {
        id: React__default.createElement("strong", null, marker.value),
        enableChip: true,
        color: marker.color
      }), event);
    },
    onMouseLeave: hideTooltip,
    onClick: function onClick(marker, event) {
      onMarkerClick === null || onMarkerClick === void 0 ? void 0 : onMarkerClick(_objectSpread2({
        id: id
      }, marker), event);
    }
  });
  var axisX = layout === 'vertical' && axisPosition === 'after' ? height : 0;
  var axisY = layout === 'horizontal' && axisPosition === 'after' ? height : 0;
  var axis = React__default.createElement("g", {
    transform: "translate(".concat(axisX, ",").concat(axisY, ")")
  }, React__default.createElement(axes.Axis, {
    axis: layout === 'horizontal' ? 'x' : 'y',
    length: layout === 'horizontal' ? width : height,
    scale: scale,
    ticksPosition: axisPosition
  }));
  var titleX = layout === 'horizontal' ? titlePosition === 'before' ? titleOffsetX : width + titleOffsetX : height / 2 + titleOffsetX;
  var titleY = layout === 'horizontal' ? height / 2 + titleOffsetY : titlePosition === 'before' ? titleOffsetY : width + titleOffsetY;
  var titleNode = React__default.createElement("g", {
    transform: "translate(".concat(titleX, ",").concat(titleY, ") rotate(").concat(titleRotation, ")")
  }, typeof title === 'string' ? React__default.createElement("text", {
    style: _objectSpread2(_objectSpread2({}, theme === null || theme === void 0 ? void 0 : (_theme$labels = theme.labels) === null || _theme$labels === void 0 ? void 0 : _theme$labels.text), {}, {
      dominantBaseline: 'central',
      textAnchor: titleAlign
    })
  }, title) : title);

  var _useMotionConfig = core.useMotionConfig(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.config;

  var animatedProps = reactSpring.useSpring({
    measuresY: (height - measureHeight) / 2,
    transform: "translate(".concat(x, ",").concat(y, ")"),
    config: springConfig,
    immediate: !animate
  });
  return React__default.createElement(reactSpring.animated.g, {
    transform: animatedProps.transform
  }, rangeNodes, React__default.createElement(BulletRects, {
    animatedProps: animatedProps,
    data: computedMeasures,
    scale: scale,
    layout: layout,
    reverse: reverse,
    x: 0,
    y: 0,
    width: width,
    height: measureHeight,
    component: measureComponent,
    onMouseEnter: function onMouseEnter(measure, event) {
      showTooltipFromEvent(React__default.createElement(tooltip.BasicTooltip, {
        id: React__default.createElement("strong", null, measure.v1),
        enableChip: true,
        color: measure.color
      }), event);
    },
    onMouseLeave: hideTooltip,
    onClick: function onClick(measure, event) {
      onMeasureClick === null || onMeasureClick === void 0 ? void 0 : onMeasureClick(_objectSpread2({
        id: id
      }, measure), event);
    }
  }), axis, markerNodes, titleNode);
};

var useEnhancedData = function useEnhancedData(data, _ref) {
  var layout = _ref.layout,
      reverse = _ref.reverse,
      height = _ref.height,
      width = _ref.width;
  return React.useMemo(function () {
    return data.map(function (d) {
      var _d$markers;

      var all = [].concat(_toConsumableArray(d.ranges), _toConsumableArray(d.measures), _toConsumableArray((_d$markers = d.markers) !== null && _d$markers !== void 0 ? _d$markers : []));
      var max = Math.max.apply(Math, _toConsumableArray(all));
      var min = Math.min.apply(Math, _toConsumableArray(all).concat([0]));
      var scale = d3Scale.scaleLinear().domain([min, max]);

      if (layout === 'horizontal') {
        scale.range(reverse === true ? [width, 0] : [0, width]);
      } else {
        scale.range(reverse === true ? [0, height] : [height, 0]);
      }

      return _objectSpread2(_objectSpread2({}, d), {}, {
        scale: scale
      });
    });
  }, [data, height, layout, reverse, width]);
};

var Bullet = function Bullet(props) {
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props),
      data = _defaultProps$props.data,
      layout = _defaultProps$props.layout,
      spacing = _defaultProps$props.spacing,
      measureSize = _defaultProps$props.measureSize,
      markerSize = _defaultProps$props.markerSize,
      reverse = _defaultProps$props.reverse,
      axisPosition = _defaultProps$props.axisPosition,
      partialMargin = _defaultProps$props.margin,
      width = _defaultProps$props.width,
      height = _defaultProps$props.height,
      titlePosition = _defaultProps$props.titlePosition,
      titleAlign = _defaultProps$props.titleAlign,
      titleOffsetX = _defaultProps$props.titleOffsetX,
      titleOffsetY = _defaultProps$props.titleOffsetY,
      titleRotation = _defaultProps$props.titleRotation,
      rangeComponent = _defaultProps$props.rangeComponent,
      rangeColors = _defaultProps$props.rangeColors,
      measureComponent = _defaultProps$props.measureComponent,
      measureColors = _defaultProps$props.measureColors,
      markerComponent = _defaultProps$props.markerComponent,
      markerColors = _defaultProps$props.markerColors,
      theme = _defaultProps$props.theme,
      animate = _defaultProps$props.animate,
      motionConfig = _defaultProps$props.motionConfig,
      isInteractive = _defaultProps$props.isInteractive,
      onRangeClick = _defaultProps$props.onRangeClick,
      onMeasureClick = _defaultProps$props.onMeasureClick,
      onMarkerClick = _defaultProps$props.onMarkerClick,
      role = _defaultProps$props.role;

  var _useDimensions = core.useDimensions(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight;

  var itemHeight = layout === 'horizontal' ? (innerHeight - spacing * (data.length - 1)) / data.length : (innerWidth - spacing * (data.length - 1)) / data.length;
  var measureHeight = itemHeight * measureSize;
  var markerHeight = itemHeight * markerSize;
  var enhancedData = useEnhancedData(data, {
    layout: layout,
    reverse: reverse,
    width: innerWidth,
    height: innerHeight
  });
  return React__default.createElement(core.Container, {
    isInteractive: isInteractive,
    theme: theme,
    animate: animate,
    motionConfig: motionConfig
  }, React__default.createElement(core.SvgWrapper, {
    width: width,
    height: height,
    margin: margin,
    role: role
  }, enhancedData.map(function (d, i) {
    return React__default.createElement(BulletItem, Object.assign({
      key: d.id
    }, d, {
      layout: layout,
      reverse: reverse,
      x: layout === 'vertical' ? itemHeight * i + spacing * i : 0,
      y: layout === 'horizontal' ? itemHeight * i + spacing * i : 0,
      width: innerWidth,
      height: itemHeight,
      titlePosition: titlePosition,
      titleAlign: titleAlign,
      titleOffsetX: titleOffsetX,
      titleOffsetY: titleOffsetY,
      titleRotation: titleRotation,
      measureHeight: measureHeight,
      markerHeight: markerHeight,
      rangeComponent: rangeComponent,
      rangeColors: rangeColors,
      measureComponent: measureComponent,
      measureColors: measureColors,
      markerComponent: markerComponent,
      markerColors: markerColors,
      axisPosition: axisPosition,
      onRangeClick: onRangeClick,
      onMeasureClick: onMeasureClick,
      onMarkerClick: onMarkerClick
    }));
  })));
};

var ResponsiveBullet = function ResponsiveBullet(props) {
  return React__default.createElement(core.ResponsiveWrapper, null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return React__default.createElement(Bullet, Object.assign({
      width: width,
      height: height
    }, props));
  });
};

exports.Bullet = Bullet;
exports.BulletItem = BulletItem;
exports.ResponsiveBullet = ResponsiveBullet;
exports.defaultProps = defaultProps;
//# sourceMappingURL=nivo-bullet.cjs.js.map
