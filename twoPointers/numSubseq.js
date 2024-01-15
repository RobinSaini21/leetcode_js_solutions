const numSubseq = (nums,target) =>{
let n = nums.length;
let right = n - 1;
let mod = 10**9 + 7;
let res = 0;

for (let i = 0; i < n; i++) {
    let left = nums[i];

    while(left + nums[right] > target && i <= right) right--

    if(i <= right){
        res += 2 ** (right - i);
        res %= mod;
    }
    
}

console.log(res)
}

const nums = [3,3,6,8], target = 10;
numSubseq(nums,target)