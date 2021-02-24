const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    this.alphLen = this.alphabet.length
    this.repeatStr = (key, str) => {
      const strLen = str.length
      const keyLen = key.length
      let newStr = ''
      
      for (let i = 0, j = 0; i < strLen; i++) {
        if (i % keyLen === 0) {
          j = 0
        }
        newStr += key[j]
        j++
      }
      
      return newStr
    }
  }

  encrypt(str, key) {
    const strLen = str.length
    let result
    const output = []

    str = str.toUpperCase()
    key = key.toUpperCase()
    const newKey = this.repeatStr(key, str).split('')

    for (let i = 0; i < strLen; i++) {
      if (this.alphabet.includes(str[i])) {

        result = (this.alphabet.indexOf(str[i]) +
          this.alphabet.indexOf(newKey.shift())
        ) % this.alphLen

        output.push(this.alphabet[result])
      } else {
        output.push(str[i])
      }
    }

    return this.type ? output.join('') : output.reverse().join('')
  }

  decrypt(str, key) {
    const strLen = str.length
    let result
    const output = []

    str = str.toUpperCase()
    key = key.toUpperCase()
    const newKey = this.repeatStr(key, str).split('')

    for (let i = 0; i < strLen; i++) {
      if (this.alphabet.includes(str[i])) {

        result = (this.alphabet.indexOf(str[i]) + this.alphLen -
          this.alphabet.indexOf(newKey.shift())
        ) % this.alphLen

        output.push(this.alphabet[result])
      } else {
        output.push(str[i])
      }
    }

    return this.type ? output.join('') : output.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
