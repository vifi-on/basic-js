const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const newArr = matrix.flat().filter(item => item === '^^')
  
  return newArr.length
};
