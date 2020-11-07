/**
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    switch (arr[index]) {
      case '--discard-prev':
        if (arr[index - 1] !== undefined) {
          result.pop();
        }
        break;

      case '--discard-next':
        index += 1;
        break;

      case '--double-prev':
        if (arr[index - 1] !== undefined) {
          result.push(arr[index - 1]);
        }
        break;

      case '--double-next':
        if (arr[index + 1] !== undefined) {
          result.push(arr[index + 1]);
        }
        break;

      default:
        result.push(arr[index]);
        break;
    }
  }

  return result;
}

module.exports = transform;
