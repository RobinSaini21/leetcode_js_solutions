const longestCommonSubsequence = (text1 = "", text2 = "") => {
  const n1 = text1.length,
    n2 = text2.length;

  let dp = new Array(n1).fill(0);

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      const isEqaul = text1[i] === text2[j];
      //console.log(isEqaul)
      if (isEqaul) {
        dp[i] = dp[i === 0 ? 0 : i - 1] + 1;
      } else {
        dp[i] = Math.max(dp[i === 0 ? 0 : i - 1], dp[i]);
      }
    }
  }
  console.log(dp);
};

// const tabuInit = (m, n) => new Array(m).fill().map(() => new Array(n).fill(0));

const text1 = "abcde",
  text2 = "ace";

longestCommonSubsequence(text1, text2);
