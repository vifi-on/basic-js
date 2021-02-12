const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const newArr = []

    members.filter(el => {
      if (typeof el === 'string') {
        const firstLetter = el.trim()[0]
        newArr.push(firstLetter.toUpperCase())
      }
    })

    return newArr.sort().join('')
  } else {
    return false
  }
};
