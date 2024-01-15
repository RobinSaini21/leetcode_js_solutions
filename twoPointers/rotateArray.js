const rotateArray =(nums, k) =>{
for (let i = 0; i < k; i++) {
    let ele = nums.pop();
    nums.unshift(ele);

}
console.log(nums)
}

const nums = [1,2,3,4,5,6,7], k = 3;
rotateArray(nums,k)