/**
 * Function to convert given input string to an array of ascii values sequentially
 * @param {string} input
 * @returns {number[]}
 */
function getAsciiValue(input) {
  let eachKey = input.split("");
  let result = [];
  eachKey.forEach((character) => {
    result.push(character.charCodeAt(0));
  });
  return result;
}

module.exports = getAsciiValue;
