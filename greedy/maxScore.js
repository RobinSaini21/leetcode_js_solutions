const maxScore = (nums = [], k) => {
  let res = 0;
  let n = nums.length;
  let sum = 0;
  let start = [];
  let begin = [];
  let answere = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    start[i] = sum;
  }
  sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    sum += nums[i];
    begin[i] = sum;
  }
console.log(start,begin)
  for (let i =  0; i < k; i++) {
    console.log(start[i],begin[k-i], k - i,k,i)
    answere = Math.max(answere, start[i] + begin[n -k + i ]);
  }

  console.log(answere);
};

const cardPoints = [1, 2, 3, 4, 5, 6, 1],
  k = 3;
maxScore(cardPoints, k);
