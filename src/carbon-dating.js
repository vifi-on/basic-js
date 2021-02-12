const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' &&
      isFinite(sampleActivity) &&
      parseInt(sampleActivity) > 0 &&
      parseInt(sampleActivity) < MODERN_ACTIVITY) {

    const NUM_K = 0.693 / HALF_LIFE_PERIOD
    const NUM_T = Math.log(MODERN_ACTIVITY / sampleActivity) / NUM_K

    return Math.ceil(NUM_T)
  } else {
    return false
  }
};
