/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return str.split('').reverse().join('') === str;
};