/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {

    let left= 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
            continue;
        }

        return !!(isPalidrome(i + 1, j, s) || isPalidrome(i, j - 1, s));
    }

    return true;
};

const isPalidrome = (start, end, s) => {
    for (let i = start, j = end; i < j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
};