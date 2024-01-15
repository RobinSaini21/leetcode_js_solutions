const sortColors = (nums) =>{
    let left = 0, right = nums.length - 1;

    for (let i = 0; i <= right; i++) {
        const num = nums[i];
        if(num === 0){
            swap(nums,i,left);
            left++;
        } else if(num === 2){
            swap(nums,i,right);
            right--;
        }
    }
    console.log(nums)
}

const swap = (nums,i,j,k = 0) =>{
    k = nums[i];
    nums[i] = nums[j];
    nums[j] = k;
}

const nums = [2,0,2,1,1,0];

sortColors(nums)