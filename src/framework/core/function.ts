interface Function {
	inherits(object: Object): void;
}

interface Object {
	prototype: any;
}

Function.prototype.inherits = function (object: Object): void {
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