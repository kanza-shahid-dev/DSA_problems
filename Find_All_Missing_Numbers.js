var findDisappearedNumbers = function (nums) {
  let res = [];

  // Mark visited numbers
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  // Collect missing numbers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
};
