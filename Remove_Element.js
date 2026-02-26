var removeElement = function (nums, val) {
  let left = 0; // pointer for placing non-val elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      console.log(nums[i], val);
      nums[left] = nums[i];
      left++;
    }
  }

  return left;
};

/********* Two Pointer Approach *********/
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else left++;
  }
  return left;
};
