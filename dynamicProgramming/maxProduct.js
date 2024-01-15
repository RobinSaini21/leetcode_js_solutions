const maxProduct = (nums) => {
  let max = (product = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    product *= nums[i];
    max = Math.max(product, max);
  }
  console.log(max)
};

const nums = [2, 3, -2, 4];

maxProduct(nums);
