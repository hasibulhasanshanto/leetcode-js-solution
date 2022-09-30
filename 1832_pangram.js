/**
 * @param {string} sentence
 * @return {boolean}
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
const checkIfPangram = (sentence) => {
  return new Set(sentence).size === 26;
};
