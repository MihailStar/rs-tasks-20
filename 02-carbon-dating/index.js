/** @constant */
const MODERN_ACTIVITY = 15;
/** @constant */
const HALF_LIFE_PERIOD = 5730;

/**
 * @param {string} sampleActivity
 * @returns {string|boolean}
 */
function dateSample(sampleActivity) {
  const finalActivity = Number.parseFloat(sampleActivity);

  if (
    typeof sampleActivity !== 'string' ||
    Number.isNaN(finalActivity) ||
    finalActivity <= 0 ||
    finalActivity >= MODERN_ACTIVITY
  ) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / finalActivity) / k;

  return Math.ceil(t);
}

module.exports = dateSample;
