const lengthOfLastWord = (str = "") => {
  let n = str.length - 1;
  let res = "";
  
  for (let i = n; i >= 0; i--) {
    if (str[i] === " ") {
      continue;
    }
    if (str[i] !== " ") {
      res += str[i];
    }
    if (str[i] !== " " && str[i - 1] === " ") {
      return res.length;
    }
  }
};

let s = "Hello World    ";

console.log(lengthOfLastWord(s));
