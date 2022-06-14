var removeDuplicates = function (nums) {
  let i = 0;

  if (nums.length == 0) return 0;
  for (let j = 1; j < nums.length; j++) {
    // check if the next value is not duplicate
    if (nums[i] !== nums[j]) {
      nums.splice(i, 1);
      i++;
    }
  }
};
