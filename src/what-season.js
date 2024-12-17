const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!';
  }
  if ((new Date(date) == "Invalid Date") || isNaN(new Date(date)) || Number.isInteger(date)){
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertyDescriptors(date).hasOwnProperty('toString')){
    throw new Error('Invalid date!');
  }

  let d = new Date(date);


  let m = d.getMonth();
  let s;
  switch (m) {
    case 1:
    case 0:
    case 11:
      s = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      s = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      s = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      s =  'autumn'; 
  }
  return s;
}

module.exports = {
  getSeason
};
