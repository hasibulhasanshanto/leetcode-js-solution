/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time complexity: O(n)
 * Auxiliary Space: O(1)
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i<nums.length; i++) {
    let remaining = target - nums[i];
    if(map.has(remaining)) {
      return [map.get(target - nums[i]) , i]
    }
    map.set(nums[i], i)
  } 
};

/**
 * Another soluntion
 * Time complexity: O(n^2)
 * Auxiliary Space: O(n)
 */
var twoSum2 = function(nums, target) {
  for(let i = 0; i< nums.length ; i++){
    for (let j = i+1; j< nums.length; j++){
      if(nums[i] +nums[j] === target ){
        return [i, j] 
      }
    }
  }
};