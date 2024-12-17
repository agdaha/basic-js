const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let ret = "";
  let repeatTimes = options["repeatTimes"] ? options["repeatTimes"] : 1;
  let additionRepeatTimes = options["additionRepeatTimes"]
    ? options["additionRepeatTimes"]
    : 1;

  for (let i = 0; i < repeatTimes; i++) {
    ret = ret.concat(str);

    if (!(options["addition"] === undefined)) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        ret = ret.concat(options["addition"]);
        if (j < additionRepeatTimes - 1) {
          if (options["additionSeparator"]) {
            ret = ret.concat(options["additionSeparator"]);
          } else {
            ret = ret.concat("|");
          }
        }
      }
    }

    if (i < repeatTimes - 1) {
      if (options["separator"]) {
        ret = ret.concat(options["separator"]);
      } else {
        ret = ret.concat("+");
      }
    }
  }
  return ret;
}

module.exports = {
  repeater,
};
