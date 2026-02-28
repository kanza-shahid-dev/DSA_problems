class Solution {
  missingNumber(nums) {
    let sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
      if (i != sorted[i]) return i;
    }
  }
}
