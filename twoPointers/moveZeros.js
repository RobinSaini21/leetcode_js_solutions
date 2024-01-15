const moveZeros = (nums) => {
  let right = 0,
    left = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
       [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  console.log(nums)
};

const swap = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};



const nums = [0,1,0,3,12];
moveZeros(nums)