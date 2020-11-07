/**
 * @param {string} string
 * @param {Object} [options]
 * @param {number} [options.repeatTimes]
 * @param {string} [options.separator]
 * @param {string} [options.addition]
 * @param {number} [options.additionRepeatTimes]
 * @param {string} [options.additionSeparator]
 * @returns {string}
 */
function repeater(string, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const a = `${addition}${additionSeparator}`
    .repeat(additionRepeatTimes)
    .slice(0, -additionSeparator.length);

  return `${string}${a}${separator}`
    .repeat(repeatTimes)
    .slice(0, -separator.length);
}

module.exports = repeater;
