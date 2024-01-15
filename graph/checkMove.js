const checkMove = (board, rMove, cMove, color) => {
  const ROWS = board.length,
    COLS = board[0].length;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  board[rMove][cMove] = color;

  const legal = (row, col, color, direction) => {
    const [_row, _col] = direction;
    let lenght = 1;
    row = row + _row;
    col = row + _col;

    while (row >= 0 && row < ROWS && col >= 0 && col <= COLS) {
      lenght += 1;
      if (board[row][col] === ".") return false;
      if (board[row][col] === color) return lenght >= 3;

      row = row + _row;
      col = row + _col;
    }
    return false;
  };

  for (const direction of directions) {
    if(legal(rMove, cMove, color, direction)) return true;
  }
};
