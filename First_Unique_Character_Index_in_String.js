/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let freq = new Map();

  for (char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  console.log(freq);

  //To find
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }
  return -1;
};
