//Check if two Strings are Anagrams of each other
let s1 = "geeks";
let s2 = "kseeg";

var isAnagram = function (s1, s2) {
  if (s1.length !== s2.length) return false;

  // Sorting both strings
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");

  // Comparing sorted strings
  return s1 === s2;
};
const isAnagramWithoutSort = (s1, s2) => {
  let freq = {};
  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of s2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
};

console.log(isAnn(s1, s2));
