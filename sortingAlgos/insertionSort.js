const insertionSort = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && key < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  console.log(nums)
};


const arr = [7,3,4,3,8,4,2,7];
insertionSort(arr);