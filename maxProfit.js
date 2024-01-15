const maxPorfit = (nums) => {
  let left = 0,
    right = 1,
    max = 0;

  while (right < nums.length) {
    if (nums[left] > nums[right]) left = right;

    max = Math.max(max, nums[right] - nums[left]);
    right++;
  }
  return max;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxPorfit(prices));
