const maxFrequency = (nums, k) => {
  //  nums.reverse((a,b) => b - a);
  let left = 0,
    right = 0,
    currentTotal = 0,
    n = nums.length,
    maxlength = 0;

  while (right < n) {
    const rightNum = nums[right];
    let windowSize = right - left + 1;
    currentTotal += rightNum;

    if (rightNum * windowSize <= currentTotal + k) {
      maxlength = windowSize;
    } else {
        const leftNum = nums[left];
        currentTotal -= leftNum;
        left++;
    }
    right++;
  }

  console.log(maxlength)
};

const nums = [1, 4, 8, 13],
  k = 5;

maxFrequency(nums, k);
