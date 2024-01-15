const matrixTopAndBottom = (matrix = []) => {
  const [row, col] = [matrix.length, matrix[0].length];
  let top = [];
  let bottom = [];

  for (let i = 0; i < col; i++) {
    top.push(matrix[0][i]);
    bottom.push(matrix[row - 1][i]);
  }

  for (let i = 0; i < row; i++) {
    matrix[i][col-1];
  }

  console.log("TOP",top);
  console.log("BOTTOM",bottom);
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
matrixTopAndBottom(heights)