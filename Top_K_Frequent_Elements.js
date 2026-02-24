class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let freq = {};

    for (let num of nums) {
      freq[num] = (freq[num] || 0) + 1;
    }

    // sort
    let sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    let top = sorted.slice(0, k);
    return top;
  }
}
