const canPartition = (nums = []) => {
  const sum = getSum(nums);
  const sumSet = sum >> 1;
  const tabu = initTabu(nums, sumSet);
  search(nums, sumSet, tabu);
  //console.log(tabu)
};

const getSum = (nums = []) => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};

const initTabu = (nums, subSetSum) => {
  const tabu = new Array(nums.length + 1)
    .fill()
    .map(() => new Array(subSetSum + 1).fill(false));

  tabu[0][0] = true;

  return tabu;
};

const search = (nums, subSet, tabu) => {
  for (let i = 1; i < nums.length; i++) {
    update(nums, i, subSet, tabu);
  }
};

const update = (nums, numIndex, subSet, tabu) => {
  const prevNum = nums[numIndex - 1];

  for (let i = 0; i <= subSet; i++) {
    const isGreater = i < prevNum;
    console.log(i);
    tabu[numIndex][i] = isGreater
      ? tabu[numIndex][subSet]
      : tabu[numIndex - 1][i] || tabu[numIndex - 1][i - prevNum];
  }
};

const nums = [1, 5, 11, 5];
// canPartition(nums);

const dfsPartition = (nums = []) => {
  const subSum = getSum(nums) / 2;
  const numLength = nums.length - 1;

  console.log(dfs(nums, numLength, subSum));
};

const dfs = (nums, numIndex, subSum) => {
  const isPartition = subSum === 0;
  if (isPartition) return true;

  const isOverTheTop = numIndex === 0 || subSum < 0;

  if (isOverTheTop) return false;

  const diffrence = subSum - nums[numIndex];

  const left = dfs(nums, numIndex - 1, diffrence);
  const right = dfs(nums, numIndex - 1, subSum);

  return left || right;
};

const memoPartition = (nums = []) => {
  const sum = getSum(nums);
  const targetSum = sum >> 1;

  let dp = new Array(targetSum + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = targetSum; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    };
  };

  console.log(dp[targetSum])
};

//dfsPartition(nums)
memoPartition(nums)