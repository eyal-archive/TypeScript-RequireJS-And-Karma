define(["require", "exports", "framework/core/exceptions"], function(require, exports, Exceptions) {
    describe("Exception", function () {
        it("should throw as type Exception", function () {
            var fn = function () {
                throw new Exceptions.Exception();
            };

            expect(fn).toThrowError(Exceptions.Exception);
        });
    });
});
//# sourceMappingURL=exceptions.tests.js.map
