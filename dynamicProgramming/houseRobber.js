const houseRobber = (nums) =>{
    let left = 0;
    let mid = 0;

    for (const right of nums) {
        let temp = mid;
      mid = Math.max(left + right,mid);
      left = temp;
    }
    console.log(mid)
}

const nums = [1,2,3,1];
houseRobber(nums)