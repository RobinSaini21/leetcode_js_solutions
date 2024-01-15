const threeSum = (nums, target = 0) => {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1,
      right = nums.length - 1;
    const k = nums[i];
    if (i > 0 && k === nums[i - 1]) continue;
    while (left < right) {
      const sum = k + nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else if (sum === target) {
        res.push([k, nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  console.log(res);
};

const nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);

const threeSumV2 = (nums = []) => {
  let res = [];
  const TARGET = 0;
  const N = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = N - 1;
    while (left < right) {
      const [LEFT_NUM, RIGHT_NUM, , K] = [nums[left], nums[right], nums[i]];
      const SUM = LEFT_NUM + RIGHT_NUM + K;
      if (SUM < TARGET) {
        left++;
      } else if (SUM > TARGET) {
        right--;
      } else if(SUM === TARGET){
        left++;
        right--;
        res.push([LEFT_NUM,RIGHT_NUM,K]);
      };
    };
  };
  console.log(res)
};
