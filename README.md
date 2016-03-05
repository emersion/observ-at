# observ-at

[observ](https://www.npmjs.com/package/observ) values that keep track of time.

## Usage

```js
var ObservableAt = require('observ-at');

// observ-at has the same interface as observ

var value = ObservableAt(0);

value(function (v) {
	console.log('value changed:', v);
});

value.set(1); // Prints "value changed: 1"

// But an optional parameter can be added to specify the time of the update

value.set(2, Date.now()); // Will update value
value.set(3, Date.now() - 3600); // Won't update value
```

## License

MIT
