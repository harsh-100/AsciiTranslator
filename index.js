function getAsciiValue(userStr) {
  let eachKey = userStr.split("");
  let result = [];
  eachKey.forEach((one) => {
    let obj = { [one]: one.charCodeAt(0) };
    result.push(obj);
  });
  return result;
}

module.exports = getAsciiValue;
