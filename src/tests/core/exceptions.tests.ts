import Exceptions = require("framework/core/exceptions");

describe("Exception",
() => {

    it("should throw as type Exception",
    () => {
        var fn = () => {
            throw new Exceptions.Exception();
        };

        expect(fn).toThrowError(Exceptions.Exception);
    });

});