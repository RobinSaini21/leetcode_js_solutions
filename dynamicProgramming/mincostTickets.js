const mincostTickets = (days = [], costs = []) => {
  const n = days.length;
  let dp = new Array(n).fill(0);


  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + costs[0];
    let j = i - 1;
    while (j >= 0 && days[i - 1] - days[j] < 7) j--;
    dp[i] = Math.min(dp[i], dp[j + 1] + costs[1]);

    j = i - 1;

    while (j >= 0 && days[i - 1] - days[j] < 30) j--;
    dp[i] = Math.min(dp[i], dp[j + 1] + costs[2]);
  }
console.log(dp[n])
};

const days = [1, 4, 6, 7, 8, 20],
  costs = [2, 7, 15];

mincostTickets(days, costs);
