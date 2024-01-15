const zeroFilledSubarray = (nums = []) => {
  let n = nums.length;
  let flag = false;
  let count = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const currEle = nums[i];
    if (!(currEle > 0)) {
      count++;
      flag = true;
    } else {
      if (flag) {
        result += (count * (count + 1)) / 2;
        count = 0;
      }
    }
    if (i === nums.length - 1) {
      result += (count * (count + 1)) / 2;
    }
  }

  console.log(result);
};

const nums1 = [0, 0, 0, 2, 0, 0];
const nums = [1, 3, 0, 0, 2, 0, 0, 4];
zeroFilledSubarray(nums);
