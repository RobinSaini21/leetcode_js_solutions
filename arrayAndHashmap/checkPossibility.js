const checkPossibility = (nums) => {
  const n = nums.length,
    tacker = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 && nums[i] > nums[i + 1]) {
      tacker.push(nums[i]);
      continue;
    }
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      tacker.push(nums[i]);
    }
    if(i === n -1 && nums[i] <nums[i - 1]){
        tacker.push(tacker)
    }
  }
  console.log(tacker.length === 1)
};

const nums = [4,2,1];
checkPossibility(nums)