function findNumberOfLIS(nums) {
    const n = nums.length;
    let maxLength = 1;
    let result = 0;
  
    const lengths = new Array(n).fill(1);
    const counts = new Array(n).fill(1);
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
            console.log(lengths, lengths[j] , lengths[i],lengths[j] + 1 === lengths[i],i,j)
          if (lengths[j] + 1 > lengths[i]) {
            console.log(lengths[j],i,j)
            lengths[i] = lengths[j] + 1;
            counts[i] = counts[j];
          } else if (lengths[j] + 1 === lengths[i]) {
            counts[i] += counts[j];
          }
        }
      }
  
      if (lengths[i] > maxLength) {
        maxLength = lengths[i];
        result = counts[i];
      } else if (lengths[i] === maxLength) {
        result += counts[i];
      }
    }
  
    return result;
  }
  
  // Test cases
 // console.log(findNumberOfLIS([1, 3, 5, 4, 7])); // Output: 2
  console.log(findNumberOfLIS([1,5,4,3,2,6,7,10,8,9])); // Output: 5
  