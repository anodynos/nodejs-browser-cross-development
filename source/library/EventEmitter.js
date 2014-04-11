define(function(){
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
});