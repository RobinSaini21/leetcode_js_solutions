const jumpGame = (nums = []) => {
  let index = 0,
    n = nums.length,
    max = 0;

  while (index < n) {
    const jump = index + nums[index];

    if (max < index) return false;
    max = Math.max(jump, max);

    index++;
  }
  return true;
};

const nums = [2, 3, 1, 1, 4];
const nums1 = [3,2,1,0,4]
console.log(jumpGame(nums1))
