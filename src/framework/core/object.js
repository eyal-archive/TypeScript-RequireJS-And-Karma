var __object = Object.prototype;
var stringType = "string";
var stringClass = "[object String]";
var numberType = "number";
var numberClass = "[object Number]";
var undefinedType = "undefined";
Object.prototype.isUndefined = function (value) {
    return typeof value == undefinedType;
};
Object.prototype.isNull = function (value) {
    return value === null;
};
Object.prototype.isString = function (value) {
    return typeof value == stringType || __object.toString.call(value) == stringClass;
};
Object.prototype.isElement = function (value) {
    return value ? value.nodeType === 1 : false;
};
Object.prototype.isNumber = function (value) {
    return typeof value == numberType || __object.toString.call(value) == numberClass;
};
//# sourceMappingURL=object.js.map