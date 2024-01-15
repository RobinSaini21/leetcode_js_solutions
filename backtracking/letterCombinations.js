const mapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

const letterCombinations = (
  digits = "",
  combination = [],
  combinations = []
) => {
  const isBasecase = !digits;
  if (isBasecase) {
    if (combination.length) combinations.push(combination.join(""));

    return combinations;
  }
  const letters = mapping[digits[0]];

  for (const char of letters) {
    backTrack(digits,char,combination,combinations)
  }
  return combinations;
};

const backTrack = (
  digits = "",
  char = "",
  combination = [],
  combinations = []
) => {
  combination.push(char);
  letterCombinations(digits.slice(1), combination, combinations);
  combination.pop();
};

console.log(letterCombinations("23"))