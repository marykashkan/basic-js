const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  let counter = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    let result = arguments[0][i].filter(el => el === '^^');    
    counter += result.length;
  };
  return counter;
}

module.exports = {
  countCats
};
