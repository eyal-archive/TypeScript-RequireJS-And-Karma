declare var define;
define(["framework/core/object"], () =>
{
	describe("isUndefined", () => {

		it("should return true when the object is undefined", () => {
			var obj;

			var result = Object.isUndefined(obj);

			expect(result).toBeTruthy();
		});

		it("should return false when the object is defined", () => {
			var obj = {};

			var result = Object.isUndefined(obj);

			expect(result).toBeFalsy();
		});

	}); 

	describe("isNull", () => {

		it("should return true when the object is null", () => {
			var obj = null;

			var result = Object.isNull(obj);

			expect(result).toBeTruthy();
		});

		it("should return false when the object is not null", () => {
			var obj;

			var result = Object.isNull(obj);

			expect(result).toBeFalsy();
		});

	});

	describe("isString", () => {

		var data: any[] = ["I'm a string", new String()];

		given(data, value =>
		{
			it("should return true when the value is a string", () => {
				var result = Object.isString(value);

				expect(result).toBeTruthy();
			});
		});

		it("should return false when the value is not a string", () => {
			var value = 6;

			var result = Object.isString(value);

			expect(result).toBeFalsy();
		});

	});

	describe("isElement", () => {

		var data: any[] = [document.body, document.createElement("div")];

		given(data, value => {
			it("should return true when the value is an element", () => {
				var result = Object.isElement(value);

				expect(result).toBeTruthy();
			});
		});

		data = [
			{},
			"I'm a string",
			2
		];

		given(data, value => {
			it("should return false when the value is not an element", () => {
				var result = Object.isElement(value);

				expect(result).toBeFalsy();
			});
		});

	});

	describe("isNumber", () => {

		var data: any[] = [1, new Number()];

		given(data, value =>
		{
			it("should return true when the value is a number", () => {
				var isNumber = Object.isNumber(value);

				expect(isNumber).toBeTruthy();
			});
		});

		it("should return false when the value is not a number", () => {
			var value = "I'm a string";

			var isNumber = Object.isNumber(value);

			expect(isNumber).toBeFalsy();
		});

	});

});
