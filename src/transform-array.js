const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  console.log(arguments[0])
  const newArr = [];
  for (i = 0; i < arguments[0].length; i++) {
    if (typeof arguments[0][i] === 'number') {
      newArr.push(arguments[0][i]);
    } else {
      if (arguments[0][i] === '--discard-prev') {
        newArr.pop();
      } else if (arguments[0][i] === '--discard-next') {
        i++
      } else if (arguments[0][i] === '--double-prev') {
        newArr.push(arguments[0][i-1]);
      } else if (arguments[0][i] === '--double-next') {
        
      }
    }
}

module.exports = {
  transform
};
