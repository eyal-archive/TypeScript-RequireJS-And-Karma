define(["framework/core/object"], function () {
    describe("isUndefined", function () {
        it("should return true when the object is undefined", function () {
            var obj;
            var result = Object.isUndefined(obj);
            expect(result).toBeTruthy();
        });
        it("should return false when the object is defined", function () {
            var obj = {};
            var result = Object.isUndefined(obj);
            expect(result).toBeFalsy();
        });
    });
    describe("isNull", function () {
        it("should return true when the object is null", function () {
            var obj = null;
            var result = Object.isNull(obj);
            expect(result).toBeTruthy();
        });
        it("should return false when the object is not null", function () {
            var obj;
            var result = Object.isNull(obj);
            expect(result).toBeFalsy();
        });
    });
    describe("isString", function () {
        var data = ["I'm a string", new String()];
        given(data, function (value) {
            it("should return true when the value is a string", function () {
                var result = Object.isString(value);
                expect(result).toBeTruthy();
            });
        });
        it("should return false when the value is not a string", function () {
            var value = 6;
            var result = Object.isString(value);
            expect(result).toBeFalsy();
        });
    });
    describe("isElement", function () {
        var data = [document.body, document.createElement("div")];
        given(data, function (value) {
            it("should return true when the value is an element", function () {
                var result = Object.isElement(value);
                expect(result).toBeTruthy();
            });
        });
        data = [
            {},
            "I'm a string",
            2
        ];
        given(data, function (value) {
            it("should return false when the value is not an element", function () {
                var result = Object.isElement(value);
                expect(result).toBeFalsy();
            });
        });
    });
    describe("isNumber", function () {
        var data = [1, new Number()];
        given(data, function (value) {
            it("should return true when the value is a number", function () {
                var isNumber = Object.isNumber(value);
                expect(isNumber).toBeTruthy();
            });
        });
        it("should return false when the value is not a number", function () {
            var value = "I'm a string";
            var isNumber = Object.isNumber(value);
            expect(isNumber).toBeFalsy();
        });
    });
});
//# sourceMappingURL=object.tests.js.map