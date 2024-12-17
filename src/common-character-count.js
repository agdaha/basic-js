const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const m1 = new Map();
  const m2 = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (m1.has(s1.charAt(i))) {
      m1.set(s1.charAt(i), m1.get(s1.charAt(i)) + 1);
    } else {
      m1.set(s1.charAt(i), 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (m2.has(s2.charAt(i))) {
      m2.set(s2.charAt(i), m2.get(s2.charAt(i)) + 1);
    } else {
      m2.set(s2.charAt(i), 1);
    }
  }

  let cnt = 0;
  for (let k of m1.keys()) {
    if (m2.has(k)) {
      cnt = cnt + Math.min(m1.get(k), m2.get(k));
    }
  }

  return cnt;
}

module.exports = {
  getCommonCharacterCount,
};
