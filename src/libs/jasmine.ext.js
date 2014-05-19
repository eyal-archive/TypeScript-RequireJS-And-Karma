function given(data, callback, wrap) {
	for (var i = 0; i < data.length; i++)
	{
		var entry = data[i];

		// hack: In IE 8 the length of the array seems to be bigger by 1 than the actual length
		if (entry === null) {
			break;
		}

		if (entry instanceof Array && !wrap) {
			callback.apply(this, entry);
		}
		else {
			callback.apply(this, [entry]);
		}
	}
};