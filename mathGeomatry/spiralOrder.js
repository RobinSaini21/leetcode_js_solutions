const spiralOrder = (matrix = []) => {
  const [cols, rows] = [matrix.length - 1, matrix[0].length - 1];
  let [top, left, right, bot] = [0, 0, rows, cols];
  const result = [];

  const isBounding = () => top <= bot && left <= right;

  while (isBounding()) {
    addTop(matrix, top, left, right, bot, result);
    top++;
    addRight(matrix, top, left, right, bot, result);
    right--;

    const hasRow = top <= bot;

    if (hasRow) {
      addBottom(matrix, top, left, right, bot, result);
      bot--;
    }

    const hasCol = left <= right;
    if (hasCol) {
        addLeft(matrix, top, left, right, bot, result);
        left++
    }
  }
  
};

const addTop = (matrix, top, left, right, bot, result = []) => {
  for (let top_ = left; top_ <= right; top_++) {
    result.push(matrix[top][top_]);
  }
};

const addRight = (matrix, top, left, right, bot, result = []) => {
  for (let top_ = top; top_ <= bot; top_++) {
    result.push(matrix[top_][right]);
  }
};

const addBottom = (matrix, top, left, right, bot, result = []) => {
  for (let bot_ = right; bot_ >= left; bot_--) {
    result.push(matrix[bot][bot_]);
  }
};

const addLeft = (matrix, top, left, right, bot, result = []) => {
    for (let left_ = bot; left_ >= top; left_--) {
      result.push(matrix[left_][left]);
    }
  };
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

spiralOrder(matrix);
