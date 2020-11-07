/**
 * @param {Array<string>} members
 * @returns {string|boolean}
 */
function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .filter((member) => typeof member === 'string')
        .map((member) => member.trim()[0].toUpperCase())
        .sort()
        .join('')
    : false;
}

module.exports = createDreamTeam;
