const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let sn = n.toString(10)

  for(let i=0; i<sn.length; i++){
      let ns = sn.slice(0,i) + sn.slice(i+1)
      let num = Number(ns)
      if (num>max) {
          max=num
      }
  }
  return max
}

module.exports = {
  deleteDigit
};
