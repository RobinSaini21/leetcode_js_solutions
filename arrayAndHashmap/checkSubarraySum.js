const checkSubarraySum = (nums, k) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      console.log(sum)
      if (j - i + 1 >= 2) {
        let res = sum / k;

        if(Number.isInteger(res)){
            return true
        }
      }
    }
  }
  return false
};

//const nums = [23,2,4,6,7], k = 6;
const nums = [23,2,6,4,7], k = 13
console.log(checkSubarraySum(nums,k))