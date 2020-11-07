const FIRST_CODE_POINT = 'A'.codePointAt(0);
const LAST_CODE_POINT = 'Z'.codePointAt(0);
const ROW = Array.from(
  { length: LAST_CODE_POINT - FIRST_CODE_POINT + 1 },
  (_, index) => String.fromCodePoint(FIRST_CODE_POINT + index)
);
const TABLE = Array.from(
  { length: LAST_CODE_POINT - FIRST_CODE_POINT + 1 },
  (_, index) => [...ROW.slice(index), ...ROW.slice(0, index)]
);

/**
 * @param {string} char
 * @returns {boolean}
 */
function isValidChar(char) {
  const codePoint = char.codePointAt(0);

  return codePoint >= FIRST_CODE_POINT && codePoint <= LAST_CODE_POINT;
}

/**
 * @param {string} char
 * @param {string} key
 * @returns {string}
 */
function encryptChar(char, key) {
  const row = key.toUpperCase().codePointAt(0) - FIRST_CODE_POINT;
  const position = char.toUpperCase().codePointAt(0) - FIRST_CODE_POINT;

  return TABLE[row][position];
}

/**
 * @param {string} char
 * @param {string} key
 * @returns {string}
 */
function decryptChar(char, key) {
  const row = key.toUpperCase().codePointAt(0) - FIRST_CODE_POINT;
  const position = TABLE[row].indexOf(char.toUpperCase());

  return TABLE[0][position];
}

class VigenereCipheringMachine {
  /**
   * @param {boolean} [isDirect]
   */
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  /**
   * @param {string} message
   * @param {string} key
   * @param {string} [type]
   * @returns {string}
   */
  crypt(message, key, type = 'encrypt') {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

    const string = message.toUpperCase();
    const signature = key.toUpperCase();
    let signatureIndex = 0;
    const cryptFunction = type === 'decrypt' ? decryptChar : encryptChar;

    const result = [...string]
      .map((char) => {
        if (!isValidChar(char)) {
          return char;
        }

        const cryptChar = cryptFunction(
          char,
          signature[signatureIndex % signature.length]
        );
        signatureIndex += 1;

        return cryptChar;
      })
      .join('');

    return this.isDirect ? result : [...result].reverse().join('');
  }

  /**
   * @param {string} message
   * @param {string} key
   * @returns {string}
   */
  encrypt(message, key) {
    return this.crypt(message, key, 'encrypt');
  }

  /**
   * @param {string} encryptedMessage
   * @param {string} key
   * @returns {string}
   */
  decrypt(encryptedMessage, key) {
    return this.crypt(encryptedMessage, key, 'decrypt');
  }
}

module.exports = VigenereCipheringMachine;
