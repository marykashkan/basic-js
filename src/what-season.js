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
function getSeason(/* date */) {
  //return arguments[0]
  const seasons = ['winter', 'spring', 'summer', 'autumn']
  let month = arguments[0].getMonth()
  if (arguments[0] === undefined) {    
    return 'Unable to determine the time of year!';    
  }
  if (Object.prototype.toString.call(arguments[0]) !== '[object Date]') {

    throw new Error("Invalid date!");
  }
  if (month <= 1 || month === 11) {
    return seasons[0];
  } else if (month <= 4) {
    return seasons[1];
  } else if (month <= 7) {
    return seasons[2];
  } else if (month <= 10) {
    return seasons[3];
  }

}

module.exports = {
  getSeason
};
