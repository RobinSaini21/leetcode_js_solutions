const twoSum = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else if (sum === target) {
      return [left + 1, right + 1];
    }
  }
};

const numbers = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(numbers, target));
