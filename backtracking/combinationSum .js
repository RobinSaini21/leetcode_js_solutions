const combinationSum = (nums = [],target) => {
  const n = nums.length;
  const combinations = [];

  const getCombination = (combination = [], idx, target) => {
    if(target < 0) return combinations;
    if(target === 0) combinations.push([...combination])
    for (let i = idx; i < n; i++) {
      const element = nums[i];
      combination.push(element);
      getCombination(combination, i, target - element);
      combination.pop();
    }
  };
  getCombination([],0,target);
  console.log(combinations)
};


const candidates = [2,3,6,7], target = 7;
combinationSum(candidates,target)