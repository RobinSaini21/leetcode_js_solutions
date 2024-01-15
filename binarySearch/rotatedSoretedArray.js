const rotatedSortedArray = (nums) => {
  let left = 0,
  right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    const [leftNum, rightNum] = [nums[left],nums[right]];
    const guess = nums[mid];
    if(leftNum < rightNum) return leftNum
    if(guess >= leftNum) right = mid;
    if(guess > rightNum) left = mid +1;
  }

  return nums[left]
};

//const nums = [3,4,5,1,2];
//const nums = [11,13,15,17];
const nums = [4,5,6,7,0,1,2];
console.log(rotatedSortedArray(nums))

