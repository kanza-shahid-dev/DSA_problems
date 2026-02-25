/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //kadanes
  let currMax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    max = Math.max(currMax, max);
  }
  return max;
};
