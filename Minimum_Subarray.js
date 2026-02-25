/**
 * @param {number[]} nums
 * @return {number}
 */
var minSubArray = function (nums) {
  //kadanes
  let currMin = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMin = Math.min(nums[i], currMin + nums[i]);
    min = Math.min(currMin, min);
  }
  return min;
};
