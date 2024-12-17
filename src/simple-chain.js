const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.items.length;
  },
  addLink(value) {
    this.items.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.getLength() ||
      !Number.isInteger(position)
    ) {
      this.items = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.items = this.items
      .slice(0, position - 1)
      .concat(this.items.slice(position));
    return this;
  },
  reverseChain() {
    this.items = this.items.reverse();
    return this;
  },
  finishChain() {
    let ret = this.items.join("~~");
    this.items = [];
    return ret;
  },
  items: [],
};

module.exports = {
  chainMaker,
};
