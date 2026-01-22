# boolean-pro

A npm pro package to get true and false values

## Installation

You can install `boolean-pro` using npm:

```bash
npm i boolean-pro
```

## Usage

```javascript
const booleanPro = require('boolean-pro');

console.log(booleanPro.getTrue());  // true
console.log(booleanPro.getFalse()); // false

console.log(booleanPro.isTrue(booleanPro.getTrue())); // true
console.log(booleanPro.isFalse(booleanPro.getFalse())); // true
```

### Returns

The function returns an object with the following properties:

- **getTrue**: Functions that returns a boolean value indicating that its true.
- **getFalse**: Function that returns a boolean value indicating that its false and not true.
- **isTrue**: Function that checks if a given value is the boolean value indicating that its true.
- **isFalse**: Function that checks if a given value is the boolean value indicating that its false and not true.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to customize it further to fit your style or any additional details you'd like to include!
