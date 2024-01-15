const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    let a = nums[i];
    if (i < 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      let left = j;
      let right = n - 1;
      let b = nums[j];

      if(j > 1 && nums[j] === nums[j - 1]) continue;

      while (left < right) {
        let sum = a + b + nums[left] + nums[right];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else if (target === sum) {
          res.push([a, b, nums[left], nums[right]]);
          left++;
          right--;
        }

        while(nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }

  console.log(res)
};


const nums = [1,0,-1,0,-2,2], target = 0;
fourSum(nums,target)