const setZeroes = (matrix = []) => {
  const [rows, cols] = [matrix.length, matrix[0].length];
  const [_row, _col] = initTabu(rows, cols);
  const [newRow, newCol] = fillPlacements(matrix, _row, _col);

  return setZeroMatrix(matrix, newRow, newCol);
};

const fillPlacements = (matrix, _row, _col) => {
  const [rows, cols] = [matrix.length, matrix[0].length];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isZero = matrix[row][col] === 0;
      if (!isZero) continue;

      _row[row] = 0;
      _col[col] = 0;
    }
  }

  return [_row, _col];
};

const setZeroMatrix = (matrix, _row, _col) => {
  const [rows, cols] = [matrix.length, matrix[0].length];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

      const isZero = _row[row] === 0 || _col[col] === 0;
      if (!isZero) continue;
      matrix[row][col] = 0;
    }
  }
  return matrix;
};
const initTabu = (rows, cols) => [
  new Array(rows).fill(1),
  new Array(cols).fill(1),
];

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
