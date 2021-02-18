const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (!this.chain[position]) {
      this.chain = []
      throw new Error
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const finish = this.chain.join('~~')
    this.chain = []
    return finish
  }
};

module.exports = chainMaker;
