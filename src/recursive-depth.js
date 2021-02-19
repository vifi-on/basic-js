const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const count = 1
    let newArr
    const isArr = (el) => Array.isArray(el)

    if (arr.find(isArr)) {
      newArr = arr.flat()
      return this.calculateDepth(newArr) + count
    } else {
      return count
    }
  }
};