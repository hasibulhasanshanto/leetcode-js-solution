
/**
 * @param {number} x
 * @return {boolean}
 * Time complexity:
 * Space complexity:
 */
const isPalindrome = function(x) {    
    return [...`${x}`].reverse().join('') == x
};
 


/**
 * Another method
 * @param {number} x
 * @return {boolean}
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
 

const isPalindrome2 = function (x) {
    if (x < 0 || (x > 0 && x % 10 === 0)) return false;
    let input = x;
    let rev = 0;
    while (x > 0) {
      rev = rev * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    return input === rev;
  };