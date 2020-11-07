'use strict';

/**
 * @param {Array<Array<number>>} [matrix]
 * @returns {Array<number>}
 */
function towelSort(matrix = []) {
  return matrix
    .map((row, index) => {
      if (index % 2 === 0) {
        return row;
      }

      return row.reverse();
    })
    .flat();
}

module.exports = towelSort;
