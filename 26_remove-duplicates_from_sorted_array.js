/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity O(n)
 * Space complexity O(1)
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;

  if (nums.length === 0) return 0;
  for (j; j < nums.length; j++) {
    // check if the next value is not duplicate
    if (nums[i] !== nums[j]) {
      i++;
    }
    // if duplicate found then change the next value to previou one for next iteration
    nums[i] = nums[j];
  }
  return i + 1;
};

/**
 * Another solution
 */

/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity O(n^2)
 * Space complexity O(n)
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j >= i + 1; j--) {
      if (nums[i] == nums[j]) {
        nums.splice(i, 1);
      }
    }
  }
};
