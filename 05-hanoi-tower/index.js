/** @constant */
const SECONDS_PER_HOUR = 3600;

/**
 * @param {number} disks
 * @param {number} stepsPerHour
 * @returns {{turns: number, seconds: number}}
 */
function calculateHanoi(disks, stepsPerHour) {
  const stepsPerSecond = stepsPerHour / SECONDS_PER_HOUR;
  const stepsToSolve = 2 ** disks - 1;
  const secondsToSolve = stepsToSolve / stepsPerSecond;

  return {
    turns: stepsToSolve,
    seconds: secondsToSolve,
  };
}

module.exports = calculateHanoi;
