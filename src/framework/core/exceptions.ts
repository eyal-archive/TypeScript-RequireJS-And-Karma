/// <amd-dependency path="./function" />

module Exceptions {
	export class Exception implements Error {

		constructor(public message?: string)
		{
			this.name = "Exception";
			this.message = message || "Exception of type " + this.name + " was thrown." ;
		}

		get name(): string {
			return this.name;
		}

		toString() {
			return this.name + ': ' + this.message;
		}
	}

	Exception.inherits(Error);
}

export = Exceptions;

