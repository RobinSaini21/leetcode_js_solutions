const lengthOfLIS = (nums = []) => {
  const n = nums.length;
  let tabu = getTabu(n);
  for (let right = 1; right < n; right++) {
    for (let left = 0; left < n; left++) {
      const [leftElement, rightElement] = [nums[left], nums[right]];
      const isGreater = leftElement < rightElement;
    if(!isGreater) continue;
const [rightNum,leftNum] = [tabu[right],tabu[left] + 1]

tabu[right] = Math.max(rightNum,leftNum)

    }
  }

  console.log(tabu)
};

const getTabu = (n) => new Array(n).fill(1);

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
lengthOfLIS(nums);
