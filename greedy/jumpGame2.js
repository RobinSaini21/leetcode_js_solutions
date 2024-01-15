const jumpGame2 = (nums = []) => {
  let [furterest, jumps, currentJumpEnd, n] = [0, 0, 0, nums.length - 1];

  for (let i = 0; i < n; i++) {
   furterest = Math.max(furterest , i + nums[i])

   if(i === currentJumpEnd){
    currentJumpEnd = furterest;
    jumps++;
   }
  }
  console.log(jumps)
};

const nums = [2, 3, 1, 1, 4];
const nums1 = [3, 2, 1, 0, 4];

jumpGame2(nums1);
