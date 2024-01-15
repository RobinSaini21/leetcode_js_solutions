const nextGreaterElements = (nums = []) => {
const n = nums.length;
let stack = [];
let res = new Array(n + 1).fill(-1)
for (let i = 0; i < n * 2; i++) {
    const idx = i >= n ? i - n : i;
       while (stack.length && nums[idx] > nums[stack.at(-1)]) {
        res[stack.at(-1)] =(nums[idx]);
        stack.pop()
       } 
    stack.push(idx)
}
console.log(res)
}

const  nums = [1,2,3,4,3];
nextGreaterElements(nums)