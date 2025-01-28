var react = require('react');
var chroma = require('chroma-js');
var themeUi = require('theme-ui');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var chroma__default = /*#__PURE__*/_interopDefaultLegacy(chroma);

var colormaps = [{
  name: 'reds',
  type: 'sequentialSingleHue'
}, {
  name: 'oranges',
  type: 'sequentialSingleHue'
}, {
  name: 'yellows',
  type: 'sequentialSingleHue'
}, {
  name: 'greens',
  type: 'sequentialSingleHue'
}, {
  name: 'teals',
  type: 'sequentialSingleHue'
}, {
  name: 'blues',
  type: 'sequentialSingleHue'
}, {
  name: 'purples',
  type: 'sequentialSingleHue'
}, {
  name: 'pinks',
  type: 'sequentialSingleHue'
}, {
  name: 'greys',
  type: 'sequentialSingleHue'
}, {
  name: 'fire',
  type: 'sequentialMultiHue'
}, {
  name: 'earth',
  type: 'sequentialMultiHue'
}, {
  name: 'water',
  type: 'sequentialMultiHue'
}, {
  name: 'heart',
  type: 'sequentialMultiHue'
}, {
  name: 'wind',
  type: 'sequentialMultiHue'
}, {
  name: 'warm',
  type: 'sequentialMultiHue'
}, {
  name: 'cool',
  type: 'sequentialMultiHue'
}, {
  name: 'pinkgreen',
  type: 'diverging'
}, {
  name: 'redteal',
  type: 'diverging'
}, {
  name: 'orangeblue',
  type: 'diverging'
}, {
  name: 'yellowpurple',
  type: 'diverging'
}, {
  name: 'redgrey',
  type: 'diverging'
}, {
  name: 'orangegrey',
  type: 'diverging'
}, {
  name: 'yellowgrey',
  type: 'diverging'
}, {
  name: 'greengrey',
  type: 'diverging'
}, {
  name: 'tealgrey',
  type: 'diverging'
}, {
  name: 'bluegrey',
  type: 'diverging'
}, {
  name: 'purplegrey',
  type: 'diverging'
}, {
  name: 'pinkgrey',
  type: 'diverging'
}, {
  name: 'rainbow',
  type: 'cyclical'
}, {
  name: 'sinebow',
  type: 'cyclical'
}];

var makeColormap = function makeColormap(name, options) {
  var _options$count = options.count,
    count = _options$count === void 0 ? 255 : _options$count,
    _options$format = options.format,
    format = _options$format === void 0 ? 'rgb' : _options$format,
    _options$mode = options.mode,
    mode = _options$mode === void 0 ? 'dark' : _options$mode;
  if (!colormaps.map(function (d) {
    return d.name;
  }).includes(name)) {
    throw Error("requested colormap '" + name + "' is not defined");
  }
  if (!['light', 'dark'].includes(mode)) {
    throw Error("invalid mode '" + mode + "'");
  }
  if (!Number.isInteger(count) || !(count > 0)) {
    throw Error("invalid count '" + count + "'");
  }
  var red = '#f57273';
  var orange = '#e39046';
  var yellow = '#c2b04c';
  var green = '#80ba69';
  var teal = '#64b9c4';
  var blue = '#85a2f7';
  var purple = '#c088de';
  var pink = '#db81ae';
  var grey = '#9aa3b3';
  var start, middle;
  if (mode === 'dark') {
    start = chroma__default["default"]('#1b1c37').brighten(0);
    middle = chroma__default["default"]('#808080').brighten(0.6);
    chroma__default["default"]('#ebebec');
  }
  if (mode === 'light') {
    start = chroma__default["default"]('#FFFFFF').darken(0);
    middle = chroma__default["default"]('#808080').brighten(0.75);
    chroma__default["default"]('#1b1e23');
  }
  var ramp;
  var bezier = true;
  var correctLightness = false;
  switch (name) {
    case 'reds':
      correctLightness = true;
      ramp = [start, red];
      break;
    case 'oranges':
      correctLightness = true;
      ramp = [start, orange];
      break;
    case 'yellows':
      correctLightness = true;
      ramp = [start, yellow];
      break;
    case 'greens':
      correctLightness = true;
      ramp = [start, green];
      break;
    case 'teals':
      correctLightness = true;
      ramp = [start, teal];
      break;
    case 'blues':
      correctLightness = true;
      ramp = [start, blue];
      break;
    case 'purples':
      correctLightness = true;
      ramp = [start, purple];
      break;
    case 'pinks':
      correctLightness = true;
      ramp = [start, pink];
      break;
    case 'greys':
      correctLightness = true;
      ramp = [start, middle];
      break;
    case 'fire':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma__default["default"](red).darken(1), chroma__default["default"].mix(red, orange, 0.45, 'lab').darken(0.5), chroma__default["default"](orange), chroma__default["default"](orange).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma__default["default"](orange).brighten(1), chroma__default["default"].mix(orange, red, 0.25, 'lab').brighten(0.5), chroma__default["default"](red), chroma__default["default"](red).darken(0.5)];
      }
      break;
    case 'earth':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma__default["default"](green).darken(1), chroma__default["default"].mix(green, yellow, 0.45, 'lab').darken(0.5), chroma__default["default"](yellow), chroma__default["default"](yellow).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma__default["default"](yellow).brighten(1), chroma__default["default"].mix(yellow, green, 0.25, 'lab').brighten(0.5), chroma__default["default"](green), chroma__default["default"](green).darken(0.5)];
      }
      break;
    case 'water':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma__default["default"](blue).darken(1), chroma__default["default"].mix(blue, teal, 0.45, 'lab').darken(0.5), chroma__default["default"](teal), chroma__default["default"](teal).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma__default["default"](teal).brighten(1), chroma__default["default"].mix(teal, blue, 0.25, 'lab').brighten(0.5), chroma__default["default"](blue), chroma__default["default"](blue).darken(0.5)];
      }
      break;
    case 'heart':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma__default["default"](purple).darken(1), chroma__default["default"].mix(purple, pink, 0.45, 'lab').darken(0.5), chroma__default["default"](pink), chroma__default["default"](pink).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma__default["default"](pink).brighten(1), chroma__default["default"].mix(pink, purple, 0.25, 'lab').brighten(0.5), chroma__default["default"](purple), chroma__default["default"](purple).darken(0.5)];
      }
      break;
    case 'wind':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma__default["default"](grey).darken(1), chroma__default["default"].mix(grey, grey, 0.45, 'lab').darken(0.5), chroma__default["default"](grey), chroma__default["default"](grey).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma__default["default"](grey).brighten(1), chroma__default["default"].mix(grey, grey, 0.25, 'lab').brighten(0.5), chroma__default["default"](grey), chroma__default["default"](grey).darken(0.5)];
      }
      break;
    case 'warm':
      correctLightness = false;
      if (mode === 'dark') {
        var preRamp = [chroma__default["default"](purple).darken(1.5), chroma__default["default"](pink).darken(1), chroma__default["default"](red).darken(0.5), chroma__default["default"](orange), chroma__default["default"](yellow).brighten(0.5)];
        var pre = chroma__default["default"].bezier(preRamp).scale().colors(4);
        ramp = [start, pre[0], pre[1], pre[2], pre[3]];
      }
      if (mode === 'light') {
        var _preRamp = [chroma__default["default"](yellow).brighten(1.5), chroma__default["default"](orange).brighten(1), chroma__default["default"](red).brighten(0.5), chroma__default["default"](pink), chroma__default["default"](purple).darken(0.5)];
        var _pre = chroma__default["default"].bezier(_preRamp).scale().colors(4);
        ramp = [start, _pre[0], _pre[1], _pre[2], _pre[3]];
      }
      break;
    case 'cool':
      correctLightness = true;
      if (mode === 'dark') {
        var _preRamp2 = [chroma__default["default"](purple).darken(1.5), chroma__default["default"](blue).darken(1), chroma__default["default"](teal).darken(0.5), chroma__default["default"](green), chroma__default["default"](yellow).brighten(0.5)];
        var _pre2 = chroma__default["default"].bezier(_preRamp2).scale().colors(4);
        ramp = [start, _pre2[0], _pre2[1], _pre2[2], _pre2[3]];
      }
      if (mode === 'light') {
        var _preRamp3 = [chroma__default["default"](yellow).brighten(1.5), chroma__default["default"](green).brighten(1), chroma__default["default"](teal).brighten(0.5), chroma__default["default"](blue), chroma__default["default"](purple).darken(0.5)];
        var _pre3 = chroma__default["default"].bezier(_preRamp3).scale().colors(4);
        ramp = [start, _pre3[0], _pre3[1], _pre3[2], _pre3[3]];
      }
      break;
    case 'pinkgreen':
      bezier = false;
      ramp = [pink, start, green];
      break;
    case 'redteal':
      bezier = false;
      ramp = [red, start, teal];
      break;
    case 'orangeblue':
      bezier = false;
      ramp = [orange, start, blue];
      break;
    case 'yellowpurple':
      bezier = false;
      ramp = [yellow, start, purple];
      break;
    case 'redgrey':
      bezier = false;
      ramp = [red, start, middle];
      break;
    case 'orangegrey':
      bezier = false;
      ramp = [orange, start, middle];
      break;
    case 'yellowgrey':
      bezier = false;
      ramp = [yellow, start, middle];
      break;
    case 'greengrey':
      bezier = false;
      ramp = [green, start, middle];
      break;
    case 'tealgrey':
      bezier = false;
      ramp = [teal, start, middle];
      break;
    case 'bluegrey':
      bezier = false;
      ramp = [blue, start, middle];
      break;
    case 'purplegrey':
      bezier = false;
      ramp = [purple, start, middle];
      break;
    case 'pinkgrey':
      bezier = false;
      ramp = [pink, start, middle];
      break;
    case 'rainbow':
      bezier = false;
      if (mode === 'dark') {
        ramp = [chroma__default["default"](purple), chroma__default["default"](blue), chroma__default["default"](teal), chroma__default["default"](green), chroma__default["default"](yellow), chroma__default["default"](orange), chroma__default["default"](red), chroma__default["default"](pink)];
      }
      if (mode === 'light') {
        ramp = [chroma__default["default"](purple), chroma__default["default"](blue), chroma__default["default"](teal), chroma__default["default"](green), chroma__default["default"](yellow), chroma__default["default"](orange), chroma__default["default"](red), chroma__default["default"](pink)];
      }
      break;
    case 'sinebow':
      bezier = false;
      if (mode === 'dark') {
        ramp = [chroma__default["default"](red), chroma__default["default"](orange), chroma__default["default"](yellow), chroma__default["default"](green), chroma__default["default"](teal), chroma__default["default"](blue), chroma__default["default"](purple), chroma__default["default"](pink)];
      }
      if (mode === 'light') {
        ramp = [chroma__default["default"](red), chroma__default["default"](orange), chroma__default["default"](yellow), chroma__default["default"](green), chroma__default["default"](teal), chroma__default["default"](blue), chroma__default["default"](purple), chroma__default["default"](pink)];
      }
      break;
  }
  var scale;
  if (bezier) {
    scale = chroma__default["default"].bezier(ramp).scale();
  } else {
    scale = chroma__default["default"].scale(ramp).mode('lab');
  }
  if (correctLightness) {
    scale = scale.correctLightness();
  }
  return scale.colors(count, format);
};

var useColormap = function useColormap(name, options) {
  var colormap = react.useMemo(function () {
    return makeColormap(name, options);
  }, [name, options == null ? void 0 : options.count, options == null ? void 0 : options.format, options == null ? void 0 : options.mode]);
  return colormap;
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var useThemedColormap = function useThemedColormap(name, options) {
  var _useColorMode = themeUi.useColorMode(),
    mode = _useColorMode[0];
  var colorMode = mode;
  if (!['light', 'dark'].includes(mode)) {
    console.warn("Unexpected `theme-ui-color-mode`, " + mode + ". Using `dark` as fallback.");
    colorMode = 'dark';
  }
  return useColormap(name, _extends({}, options, {
    mode: colorMode
  }));
};

exports.colormaps = colormaps;
exports.makeColormap = makeColormap;
exports.useColormap = useColormap;
exports.useThemedColormap = useThemedColormap;
//# sourceMappingURL=index.js.map
