const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SEC_PER_HOUR = 3600
  const result = {}

  const minNumTurns = (2 ** disksNumber) - 1
  const minNumSec = Math.floor((SEC_PER_HOUR / turnsSpeed) * minNumTurns)

  result.turns = minNumTurns
  result.seconds = minNumSec

  return result
};
