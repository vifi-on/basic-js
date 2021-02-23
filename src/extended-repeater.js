const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const [
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  ] = Object.values(options)

  const subArrOfAdd = new Array(additionRepeatTimes).fill(String(addition))
  const strOfAdd = `${str}${subArrOfAdd.join(String(additionSeparator))}`
  const arrOfAdd = new Array(repeatTimes).fill(strOfAdd)
  const result = arrOfAdd.join(String(separator))

  return result
};
  