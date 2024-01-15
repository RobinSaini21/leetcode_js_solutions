const rotateImage = (matrix = []) => {
  reverseMatrix(matrix);
  console.log(matrix);
  let n = matrix.length;

  for (let col = 0; col < n; col++) {
    for (let row = 0; row < col; row++) {
      [matrix[col][row], matrix[row][col]] = [
        matrix[row][col],
        matrix[col][row],
      ];
      // [matrix[row][col], matrix[col][row]] = [
      //   matrix[col][row],
      //   matrix[row][col],
      // ];
    }
  }
  console.log(matrix)
};

const reverseMatrix = (matrix = []) => {
  const n = matrix.length - 1;
  for (let i = 0; i < n - 1; i++) {
    [matrix[i], matrix[n - i]] = [matrix[n - i], matrix[i]];
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateImage(matrix);
//reverseMatrix(matrix);
