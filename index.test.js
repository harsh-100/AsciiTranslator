const getAsciiValue = require("./index");

const input = "Hello";
const expectedOutput = [72, 101, 108, 108, 111];

const output = getAsciiValue(input);

const every = output.every((value, index) => value === expectedOutput[index]);

if (!every) {
  throw Error("Didn't match expected output");
}
