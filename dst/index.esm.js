import { useMemo } from 'react';
import chroma from 'chroma-js';
import { useColorMode } from 'theme-ui';

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
    start = chroma('#1b1e23').brighten(0.3);
    middle = chroma('#808080').brighten(0.6);
    chroma('#ebebec');
  }
  if (mode === 'light') {
    start = chroma('#FFFFFF').darken(0);
    middle = chroma('#808080').brighten(0.75);
    chroma('#1b1e23');
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
        ramp = [start, chroma(red).darken(1), chroma.mix(red, orange, 0.45, 'lab').darken(0.5), chroma(orange), chroma(orange).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma(orange).brighten(1), chroma.mix(orange, red, 0.25, 'lab').brighten(0.5), chroma(red), chroma(red).darken(0.5)];
      }
      break;
    case 'earth':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma(green).darken(1), chroma.mix(green, yellow, 0.45, 'lab').darken(0.5), chroma(yellow), chroma(yellow).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma(yellow).brighten(1), chroma.mix(yellow, green, 0.25, 'lab').brighten(0.5), chroma(green), chroma(green).darken(0.5)];
      }
      break;
    case 'water':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma(blue).darken(1), chroma.mix(blue, teal, 0.45, 'lab').darken(0.5), chroma(teal), chroma(teal).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma(teal).brighten(1), chroma.mix(teal, blue, 0.25, 'lab').brighten(0.5), chroma(blue), chroma(blue).darken(0.5)];
      }
      break;
    case 'heart':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma(purple).darken(1), chroma.mix(purple, pink, 0.45, 'lab').darken(0.5), chroma(pink), chroma(pink).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma(pink).brighten(1), chroma.mix(pink, purple, 0.25, 'lab').brighten(0.5), chroma(purple), chroma(purple).darken(0.5)];
      }
      break;
    case 'wind':
      correctLightness = true;
      if (mode === 'dark') {
        ramp = [start, chroma(grey).darken(1), chroma.mix(grey, grey, 0.45, 'lab').darken(0.5), chroma(grey), chroma(grey).brighten(0.5)];
      }
      if (mode === 'light') {
        ramp = [start, chroma(grey).brighten(1), chroma.mix(grey, grey, 0.25, 'lab').brighten(0.5), chroma(grey), chroma(grey).darken(0.5)];
      }
      break;
    case 'warm':
      correctLightness = true;
      if (mode === 'dark') {
        var preRamp = [chroma(purple).darken(1.5), chroma(pink).darken(1), chroma(red).darken(0.5), chroma(orange), chroma(yellow).brighten(0.5)];
        var pre = chroma.bezier(preRamp).scale().colors(4);
        ramp = [start, pre[0], pre[1], pre[2], pre[3]];
      }
      if (mode === 'light') {
        var _preRamp = [chroma(yellow).brighten(1.5), chroma(orange).brighten(1), chroma(red).brighten(0.5), chroma(pink), chroma(purple).darken(0.5)];
        var _pre = chroma.bezier(_preRamp).scale().colors(4);
        ramp = [start, _pre[0], _pre[1], _pre[2], _pre[3]];
      }
      break;
    case 'cool':
      correctLightness = true;
      if (mode === 'dark') {
        var _preRamp2 = [chroma(purple).darken(1.5), chroma(blue).darken(1), chroma(teal).darken(0.5), chroma(green), chroma(yellow).brighten(0.5)];
        var _pre2 = chroma.bezier(_preRamp2).scale().colors(4);
        ramp = [start, _pre2[0], _pre2[1], _pre2[2], _pre2[3]];
      }
      if (mode === 'light') {
        var _preRamp3 = [chroma(yellow).brighten(1.5), chroma(green).brighten(1), chroma(teal).brighten(0.5), chroma(blue), chroma(purple).darken(0.5)];
        var _pre3 = chroma.bezier(_preRamp3).scale().colors(4);
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
        ramp = [chroma(purple), chroma(blue), chroma(teal), chroma(green), chroma(yellow), chroma(orange), chroma(red), chroma(pink)];
      }
      if (mode === 'light') {
        ramp = [chroma(purple), chroma(blue), chroma(teal), chroma(green), chroma(yellow), chroma(orange), chroma(red), chroma(pink)];
      }
      break;
    case 'sinebow':
      bezier = false;
      if (mode === 'dark') {
        ramp = [chroma(red), chroma(orange), chroma(yellow), chroma(green), chroma(teal), chroma(blue), chroma(purple), chroma(pink)];
      }
      if (mode === 'light') {
        ramp = [chroma(red), chroma(orange), chroma(yellow), chroma(green), chroma(teal), chroma(blue), chroma(purple), chroma(pink)];
      }
      break;
  }
  var scale;
  if (bezier) {
    scale = chroma.bezier(ramp).scale();
  } else {
    scale = chroma.scale(ramp).mode('lab');
  }
  if (correctLightness) {
    scale = scale.correctLightness();
  }
  return scale.colors(count, format);
};

var useColormap = function useColormap(name, options) {
  var colormap = useMemo(function () {
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
  var _useColorMode = useColorMode(),
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

export { colormaps, makeColormap, useColormap, useThemedColormap };
//# sourceMappingURL=index.esm.js.map
