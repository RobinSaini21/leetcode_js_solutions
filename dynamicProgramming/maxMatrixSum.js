const kadne = (triangleSum = []) => {
  let currentSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < triangleSum.length; i++) {
    currentSum = Math.max(triangleSum[i], currentSum + triangleSum[i]);
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

const maxMatrixSum = (M = []) => {
  const [ROWS, COLS] = [M.length, M[0].length];
  let res = -Infinity;
  for (let col = 0; col < COLS; col++) {
    let temp = new Array(ROWS).fill(0);
    for (let left = col; left < COLS; left++) {
      for (let i = 0; i < ROWS; i++) {
        temp[i] += M[i][left];
      };
      res = Math.max(res , kadne(temp))
    }
  }

  console.log(res)
};

const M = [
  [1, 2, -1, -4, -20],
  [-8, -3, 4, 2, 1],
  [3, 8, 10, 1, 3],
  [-4, -1, 1, 7, -6],
];

maxMatrixSum(M);
