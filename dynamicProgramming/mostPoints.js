const mostPoints = (questions = []) => {
  const n = questions.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const [points, power] = questions[i];
    const take = points + (i + 1 + power <= n ? dp[i + 1 + power] : 0);
    const not_take = dp[i + 1];
    dp[i] = Math.max(take, not_take);
  }
  console.log(dp);
};
const questions = [
  [3, 2],
  [4, 3],
  [4, 4],
  [2, 5],
];
mostPoints(questions);
