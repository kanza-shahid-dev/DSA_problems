/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  let sorted = nums.sort((a, b) => a - b);

  let arr = [...new Set(sorted)];
  console.log(arr);

  for (let i = 0; i < nums.length; i++) {
    console.log("n", arr[i], "i", i + 1);
    if (arr[i] != i + 1) {
      console.log("not", arr[i], i + 1);
      res.push(i + 1);
    }
  }
  return res;
};
