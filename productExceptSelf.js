const productExceptSelf = (nums) =>{
    const n  = nums.length ;
    const res = [];
    for (let i = 0; i < n; i++) {
       let accumlator = 1;
        for (let j = 0; j < n; j++) {
            if(nums[i] === nums[j]) continue;
            accumlator *= nums[j]
        }
       res.push(accumlator)
    }
    return res
}

const  nums = [1,2,3,4];

console.log(productExceptSelf(nums))