const countPalindromicSubsequence = (sequence) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const n = sequence.length;
  const rightMap = new Map();
  const leftMap = new Set();
  const res = new Set();
  let count = 0;
  for (const s of sequence) {
    rightMap.set(s, (rightMap.get(s) || 0) + 1);
  }
  for (let i = 0; i < n; i++) {
    const char = sequence[i];
    rightMap.set(char, rightMap.get(char) - 1);

    if (rightMap.get(char) === 0) {
      rightMap.delete(char);
    }
    for (let j = 0; j < 26; j++) {
      if (leftMap.has(letters[j]) && rightMap.has(letters[j])) {
        res.add(letters[j] + char + letters[j]);
      }
    }
    leftMap.add(char);
  }
  console.log(res.size);
};

const s = "bbcbaba";
countPalindromicSubsequence(s);
