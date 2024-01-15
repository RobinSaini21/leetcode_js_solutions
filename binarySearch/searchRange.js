const searchRange = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const [leftNum, rigthNum] = [nums[left], nums[right]];
    const guess = nums[mid];
    if(guess === target){
      const leftGuess = mid - 1;
      const rightGuess = mid + 1;

      if(nums[leftGuess] === target){
        return [leftGuess,mid];
      } else {
        return [mid,rightGuess]
      }

    } else if(guess < target) left = mid + 1;
     if(guess > target) right = mid - 1

  }
};

const nums = [5,4,4,8,8,10] , target = 8;
console.log(searchRange(nums,target))