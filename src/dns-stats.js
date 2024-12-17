const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const m = new Map();
  for(let i=0; i<domains.length; i++){
      
      let words = domains[i].split('.').reverse();
      let key = '';
      words.forEach((element) => {
          key = key.concat(".",element);
          if (m.has(key)) {
              m.set(key,m.get(key)+1);
          } else {
              m.set(key,1);
          }
      });
  }
  return Object.fromEntries(m);
}

module.exports = {
  getDNSStats
};
