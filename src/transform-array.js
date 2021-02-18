const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    const newArr = Array.from(arr)

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === '--discard-next') {
        newArr[i] = null
        newArr[i + 1] = null
      } else if (newArr[i] === '--discard-prev') {
        newArr[i] = null
        newArr[i - 1] = null
      } else if (newArr[i] === '--double-next') {
        newArr[i] = newArr[i + 1]
      } else if (newArr[i] === '--double-prev') {
        newArr[i] = newArr[i - 1]
      }
    }
    
    const result = newArr.filter(item => item !== null && item !== undefined)
    
    return result
  } else {
    throw new Error
  }
};
