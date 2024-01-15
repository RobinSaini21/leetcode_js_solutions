const findTargetSumWays = (i, nums = [], target, sum) => {
  
  const isBaseCase = nums.length === i;
  if (isBaseCase) {
    // console.log(sum === target, sum)
    if (sum === target) {
      return 1;
    } 

      return 0;

  }

 return dfs(i, nums, target, sum);
};

const dfs = (i, nums, target, sum) => {
  const left = findTargetSumWays(i + 1, nums, target, sum + nums[i]);
  const right = findTargetSumWays(i + 1, nums, target,sum - nums[i]);

  return left + right;
};


const nums = [1,1,1,1,1], target = 3;

console.log(findTargetSumWays(0,nums,3,0));