/** @constant */
const CAT = '^^';

/**
 * @param {Array<Array<string>>} matrix
 * @returns {number}
 */
function countCats(matrix) {
  return matrix.flat().filter((it) => it === CAT).length;
}

module.exports = countCats;
