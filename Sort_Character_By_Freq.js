/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let freq = {};
  for (char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  console.log(freq, typeof freq);
  let sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  console.log("sorted", sorted);
  let res = sorted.join("");
  console.log(res);

  return res;
};
