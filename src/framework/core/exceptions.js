/// <amd-dependency path="./function" />
define(["require", "exports", "./function"], function(require, exports) {
    var Exceptions;
    (function (Exceptions) {
        var Exception = (function () {
            function Exception(message) {
                this.message = message;
                this.name = "Exception";
                this.message = message || "Exception of type " + this.name + " was thrown.";
            }
            Object.defineProperty(Exception.prototype, "name", {
                get: function () {
                    return this.name;
                },
                enumerable: true,
                configurable: true
            });

            Exception.prototype.toString = function () {
                return this.name + ': ' + this.message;
            };
            return Exception;
        })();
        Exceptions.Exception = Exception;

        Exception.inherits(Error);
    })(Exceptions || (Exceptions = {}));

    
    return Exceptions;
});
//# sourceMappingURL=exceptions.js.map
