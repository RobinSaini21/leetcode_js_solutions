const longestConsecutive = (nums) =>{
    nums.sort((a,b) => a-b);
    let idx = 1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] + 1 === nums[i + 1]){
         ++idx;
        }
        
    }
    console.log(idx)
}

//const nums = [100,4,200,1,3,2];
const nums = [0,3,7,2,5,8,4,6,0,1];
longestConsecutive(nums)