const find132pattern = (nums) => {
  const stack = [];

  for (const num of nums) {
  

    if (
      stack.length > 1 &&
      stack[stack.length - 1] > num &&
      stack[stack.length - 2] < stack[stack.length - 1]
    ) {
      return true;
   
    }
    stack.push(num);
  }
  return false
};

//const nums = [1, 2, 3, 4];
const nums = [3,1,4,2]
//const nums = [-1,3,2,0];

console.log(find132pattern(nums));
