let search = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.ceil(left + (right - left) / 2);
    const [leftNum, rigthNum] = [nums[left], nums[right]];
    const guess = nums[mid];

    if (guess > leftNum) {
      right = mid;
    }
    if (guess < rigthNum) {
      left = mid + 1;
    }
  }

  let start = left;
  left = 0;
  if (target < nums[start] && target > nums[left]) {
    left = 0;
    right = start;
  } else if (target > nums[start + 1] && target < nums[nums.length - 1]) {
    left = start + 1;
    right = nums.length - 1;
  }

  return binarySearch(nums, target, left, right);
};
const binarySearch = (nums, target, left, right) => {
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const guess = nums[mid];
    if (guess === target) {
      return mid;
    } else if (guess < target) {
      left = mid + 1;
    } else if (guess > target) {
      right = mid - 1;
    }
  }
};

(nums = [4, 5, 6, 7, 0, 1, 2]), (target = 5);
search(nums, target);
