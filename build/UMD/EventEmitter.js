// Generated by uRequire v0.6.13-01 - template: 'UMDplain' 
(function (window, global) {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;
(function (factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
} else if (typeof define === 'function' && define.amd) { define(['require', 'exports', 'module', 'eventemitter2'], factory) } else throw new Error('uRequire: Loading UMD module as <script>, without `build.noLoaderUMD`');
}).call(this, function (require, exports, module) {
  

var EventEmitter2;
  if (__isNode) {
    return require("events").EventEmitter;
  } else {
    if (__isAMD) {
      return EventEmitter2 = require("eventemitter2");
    } else if (__isWeb) {
      return window.EventEmitter2;
    }
  }


})
}).call(this, (typeof exports === 'object' ? global : window), (typeof exports === 'object' ? global : window))