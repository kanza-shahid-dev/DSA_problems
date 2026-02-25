//Check if two Strings are Anagrams of each other
let s1 = "geeks";
let s2 = "kseeg";

const isAnn = (s1, s2) => {
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
