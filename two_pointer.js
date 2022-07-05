/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time complexity: O(n log n) As sort function is used
 * Auxiliary Space: O(1)
 * For working two pointer nums array need to sorted
 * Two pointer works for sorted array
 * doc: https://www.geeksforgeeks.org/two-pointers-technique
 */
const twoPointer = function(nums, target) {

    let start = 0;
    let end = nums.length - 1;
  
    while (start < end) {
      if (nums[start] + nums[end] === target) {
        return [start, end];
      } else if (nums[start] + nums[end] > target) {
        end--;
      } else {
        start++;
      } 
    }
}
  
console.log(twoPointer([2,3,4], 6));

