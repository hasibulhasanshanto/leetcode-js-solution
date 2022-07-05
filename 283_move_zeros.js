/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
const moveZeroes = function(nums) {
    let size = nums.length;

    for (let i = 0; i < size; i++) {
        if(nums[i]===0){
            nums.splice(i, 1);
            nums.push(0);
            i--;
            size--;
        } 
    }

    return nums;    
};