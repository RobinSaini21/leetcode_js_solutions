const maxSumMinProduct = (nums = []) => {
  const n = nums.length;
  let dp = new Array(n).fill(0);
  let res = 0
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < n; j++) {
      min = Math.min(min, nums[j]);
      sum += nums[j];
      if (i === 0 && j === n - 1) continue;
      dp[i] = Math.max(sum * min,Math.max(dp[i],dp[i === 0 ? 0 : i - 1]));
      //   dp[i] = Math.max(sum * 2, dp[i === 0 ? 0 : i - 1]);
      //  console.log(nums[i])
    }
    // console.log(sum * 2)
  }
  console.log(dp[n - 1])
};

//const nums = [1, 2, 3, 2];
const nums = [3, 1, 5, 6, 4, 2];
maxSumMinProduct(nums);
