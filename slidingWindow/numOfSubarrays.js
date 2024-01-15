const numOfSubarrays = (arr, k, threshold) => {
  let right = 0,
    left = 0,
    n = arr.length,
    currentSum = 0,
    total = 0;

  while (right < n) {
    let rightNum = arr[right];
    currentSum += rightNum;
    let window = right - left + 1;

    if (window >= k) {
      let average = currentSum / k;
      if (average >= threshold) {
        ++total;
        
      }
      currentSum -= arr[left];
      left++
    }
    right++  
  }
  console.log(total)
};

const arr = [2, 2, 2, 2, 5, 5, 5, 8],
  k = 3,
  threshold = 4;
  numOfSubarrays(arr,k,threshold)
