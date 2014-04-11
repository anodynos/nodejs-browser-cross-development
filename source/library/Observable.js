define(["lodash", "EventEmitter"], function(_, EventEmitter) {
  function Observable(options) {
    this.myOptions = options;
    this.lodash = _;
  };

  Observable.EventEmitter = EventEmitter;
  Observable._ = _;
  return Observable;
});