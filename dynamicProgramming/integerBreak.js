const integerBreak = (n) => {
    const dp = initTabu(n);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i],Math.max(j,dp[j])*Math.max(i - j,dp[i - j]));
        }
    }

    console.log(dp[n-2])
}
// NodeIterator
const initTabu = (n) => 
    new Array((n)).fill(0)  ;
    integerBreak(12)