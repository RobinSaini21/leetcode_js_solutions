const permutations = (nums = []) => {
  let n = nums.length;
  let res = [];

  const getPermutations = (permutation = [], idx = 0) => {
    if(permutation.length === n){
        res.push([...permutation])
        return null
    }
    for (let i = 0; i < n; i++) {
      const element = nums[i];
      if(permutation.includes(nums[i])) continue;
      permutation.push(element);
      console.log(element)
      getPermutations(permutation, i + 1 );
      permutation.pop();
    }
  };
  getPermutations([],0);
console.log(res)
  return res;
};

const nums = [1, 2, 3];

permutations(nums)