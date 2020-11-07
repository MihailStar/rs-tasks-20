/**
 * @private
 */
const chain = [];

const chainMaker = {
  /**
   * @returns {number}
   */
  getLength() {
    return chain.length;
  },

  /**
   * @param {*} value
   * @returns {chainMaker}
   */
  addLink(value) {
    chain.push(String(value));

    return this;
  },

  /**
   * @param {number} position
   * @returns {chainMaker}
   */
  removeLink(position) {
    const index = position - 1;

    if (Number.isNaN(index) || index < 0 || index > chain.length - 1) {
      chain.length = 0;

      throw new Error();
    }

    chain.splice(index, 1);

    return this;
  },

  /**
   * @returns {chainMaker}
   */
  reverseChain() {
    chain.reverse();

    return this;
  },

  /**
   * @returns {string}
   */
  finishChain() {
    const result = `( ${chain.join(' )~~( ')} )`;

    chain.length = 0;

    return result;
  },
};

module.exports = chainMaker;
