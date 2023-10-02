# AsciiTranslator

AsciiTranslator is an `npm package` that allows you to generate ***ASCII values*** for each character in a given string.

![ascii-value](https://github.com/harsh-100/AsciiTranslator/assets/61608506/68831b8e-5a0b-4216-96cb-f3788d4eadac)

## Installation

You can install AsciiTranslator via npm using the following command:

```bash
npm install AsciiTranslator
```
### Usage javascript
```js
const getAsciiValue = require('AsciiTranslator');

const result = getAsciiValue('Hello');

console.log(result);
//The above code will output:
[
  { "H": 72 },
  { "e": 101 },
  { "l": 108 },
  { "l": 108 },
  { "o": 111 }
]
```

### Contributing
If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
