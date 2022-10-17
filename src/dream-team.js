const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  newArray = [];
  if (arguments.length === 1) {
    if (typeof arguments[0] !== 'string') {
      if (Array.isArray(arguments[0]) === false) {
        return false;
      };
    };
  };
  for (let arr of arguments[0]) {
    if (typeof arr === 'string') {
      newArray.push(arr.trimStart()[0].toUpperCase());
    };
  };
  return newArray.sort().join('');
};

module.exports = {
  createDreamTeam
};
