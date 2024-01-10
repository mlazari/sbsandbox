# Loader output source

## With `@babel/plugin-transform-modules-commonjs`:
```
"use strict";
function _define_property(obj, key, value) {
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _compo = require("./compo1");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = exports.default = {
    title: "Components/Compo1",
    component: _compo.Compo1,
    parameters: {
        layout: "container"
    }
};
var Template = function(args) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_compo.Compo1, _object_spread({}, args));
};
var Default = exports.Default = Template.bind({});
;module.exports.__namedExportsOrder = ["Default"];
```

## Without `@babel/plugin-transform-modules-commonjs`:
```
function _define_property(obj, key, value) {
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
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
import React from "react";
import { Compo1 } from "./compo1";
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: "Components/Compo1",
  component: Compo1,
  parameters: {
    layout: "container"
  }
};
var Template = function (args) {
  return /*#__PURE__*/_jsx(Compo1, _object_spread({}, args));
};
export var Default = Template.bind({});
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <Compo1 {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};;export const __namedExportsOrder = ["Default"];
```