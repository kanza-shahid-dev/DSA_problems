var lengthOfLongestSubstring = function (s) {
  let longestStr = 0;
  let set = new Set();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let letter = s[right];

    // To Remove duplicate characters from window
    while (set.has(letter)) {
      set.delete(s[left]);
      left++;
    }

    set.add(letter);
    longestStr = Math.max(longestStr, set.size);
  }

  return longestStr;
};
