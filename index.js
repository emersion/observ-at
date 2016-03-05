var Observable = require('observ');
var isObserv = require('is-observ');

function ObservableAt(value) {
	if (!isObserv(value)) {
		value = Observable(value);
	}

	var lastUpdate = Date.now();
	var setter = value.set;

	value.set = function (v) {
		at = at || Date.now();
		if (lastUpdate > at) return false;
		lastUpdate = at;

		return setter.call(this, v);
	};

	return value;
}

module.exports = ObservableAt;
