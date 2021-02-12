const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const season = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10]
  }

  if (!date) {
    return 'Unable to determine the time of year!'
  } else if (!date.getTime()) {
    throw new Error
  } else {
    const month = date.getMonth()
    let result

    for (let [key, value] of Object.entries(season)) {
      if (value.includes(month)) {
        result = key
      }
    }

    return result
  }
};
