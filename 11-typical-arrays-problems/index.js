'use strict';

/**
 * @param {Array} array
 * @returns {boolean}
 */
function isArrayValid(array) {
  if (array === undefined || !Array.isArray(array) || array.length === 0) {
    return false;
  }
  return true;
}

/**
 * @param {Array<number>} array
 * @returns {number}
 */
function min(array) {
  return isArrayValid(array) ? Reflect.apply(Math.min, null, array) : 0;
}

/**
 * @param {Array<number>} array
 * @returns {number}
 */
function max(array) {
  return isArrayValid(array) ? Reflect.apply(Math.max, null, array) : 0;
}

/**
 * @param {Array<number>} array
 * @returns {number}
 */
function avg(array) {
  return isArrayValid(array)
    ? array.reduce((accumulator, it) => accumulator + it, 0) / array.length
    : 0;
}

module.exports = { min, max, avg };
