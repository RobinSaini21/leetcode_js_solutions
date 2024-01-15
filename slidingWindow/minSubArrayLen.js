const minSubArrayLen = (nums,target) =>{
    let leftWindow = 0, rightWindow = 0, n = nums.length, currentSum = 0, min = Number.MAX_SAFE_INTEGER
while(rightWindow < n ){
    currentSum += nums[rightWindow];

    while(currentSum >= target){
        currentSum -= nums[leftWindow];
        min = Math.min(rightWindow - leftWindow + 1 ,min)
        leftWindow++;
    }

    rightWindow++;
}
console.log(min)
}

const target = 7, nums = [2,3,1,2,4,3];
minSubArrayLen(nums,target)