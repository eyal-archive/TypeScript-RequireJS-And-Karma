interface Object {
	isUndefined(value: any): boolean;

	isNull(value: any): boolean;

	isString(value: any): boolean;

	isElement(value: any): boolean;

	isNumber(value: any): boolean;
}

var __object = Object.prototype;

var stringType = "string";
var stringClass = "[object String]";

var numberType = "number";
var numberClass = "[object Number]";

var undefinedType = "undefined";

Object.prototype.isUndefined = (value: any): boolean => {
	return typeof value == undefinedType;
};

Object.prototype.isNull = (value: any): boolean => {
	return value === null;
};

Object.prototype.isString = (value: any): boolean =>
{
	return typeof value == stringType || __object.toString.call(value) == stringClass;
};

Object.prototype.isElement = (value: any): boolean => {
	return value ? value.nodeType === 1 : false;
};

Object.prototype.isNumber = (value: any): boolean => {
	return typeof value == numberType || __object.toString.call(value) == numberClass;
};



