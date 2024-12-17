const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let curChar = "";
  let cnt = 0;
  let ret = "";
  for (let i = 0; i < str.length; i++) {
    if (curChar == str[i]) {
      cnt++;
    } else {
      if (cnt > 1) {
        ret = ret.concat(cnt.toString());
      }
      ret = ret.concat(curChar);
      cnt = 1;
      curChar = str[i];
    }
  }
  if (cnt > 1) {
    ret = ret.concat(cnt.toString());
  }
  ret = ret.concat(curChar);
  return ret;
}

module.exports = {
  encodeLine,
};
