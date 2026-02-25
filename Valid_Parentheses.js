var isValid = function (s) {
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (let char of s) {
    //opening
    if (char === "(" || char === "{" || char === "[") stack.push(char);
    //closing
    else {
      let top = stack.pop();
      if (top !== map[char]) return false;
    }
  }
  return stack.length === 0;
};
