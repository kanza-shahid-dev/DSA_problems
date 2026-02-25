// Find Character Frequencies in Order of Occurrence
// Given string s containing only lowercase characters,
// the task is to print the characters along with their frequency in the order
// of their occurrence and in the given format explained in the examples below.

// Examples:
let s = "geeksforgeeks";
// Output: g2 e4 k2 s2 f1 o1 r1

const Frequencies = (s) => {
  let freq = new Map();
  for (char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  console.log(freq);
  // to make string
  let res = [];
  for (let [char, count] of freq) {
    res.push(char + count);
  }
  return res.join(" ");
};
console.log(Frequencies(s));
