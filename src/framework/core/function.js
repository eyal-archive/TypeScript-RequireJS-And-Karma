Function.prototype.inherits = function (object) {
    this.super_ = object;
    this.prototype = Object.create(object.prototype, {
        constructor: {
            value: this,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};
//# sourceMappingURL=function.js.map