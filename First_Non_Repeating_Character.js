// First non-repeating character of given string
// Given a string s of lowercase English letters, the task is to find the first non-repeating character. If there is no such character, return '$'.

let s = "geeksforgeeks";
// Output: 'f'

const FirstNonRepeating = (s) => {
  let freq = new Map();
  for (char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  console.log(freq);

  //To find
  for (char of s) {
    if (freq.get(char) === 1) return char;
  }
  // for (let [char,count] of freq)
  // {
  //     if(count===1)
  //     return char
  // }
};

console.log(FirstNonRepeating(s));
