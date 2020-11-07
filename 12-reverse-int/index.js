'use strict';

/**
 * @param {number} n
 * @returns {number}
 */
function reverse(n) {
  return Number.parseInt([...n.toString()].reverse().join(''), 10);
}

module.exports = reverse;
