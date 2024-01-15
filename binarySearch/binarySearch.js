const binarySearch = (nums,target) =>{
let left = 0, right = nums.length - 1;

  while(left <= right){
   const mid = Math.floor(left +  (right - left) / 2);
    const guess = nums[mid];
    if(guess === target){
      return mid;
    } else if(guess < target) {
      left = mid + 1;
    } else if (guess > target){
      right = mid - 1;  
    }

  }

}


const nums = [-1,0,3,5,9,12] , target = 9;
console.log(binarySearch(nums,target));
