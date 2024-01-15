const removeKdigits = (nums, k) => {
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
    
    while (k && stack.length && parseInt(nums[i]) < stack[stack.length - 1]) {
        stack.pop();
        k--;
    }
    stack.push(parseInt(nums[i]))
  }

  console.log(stack.join(""))
};


const num = "1432219", k = 3;

removeKdigits(num,k)