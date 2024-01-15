const wordSearch = (board = [], word = "") => {
  const ROW = board.length,
    COL = board[0].length;

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      if (dfs(board, row, col, ROW, COL, word, 0)) return true;
    }
  }
  return false;
};

const dfs = (board, row, col, rows, cols, word = "", index) => {
  if (index === word.length) return true;
  if (outOfBounds(row, col, rows, cols)) return false;
  if (board[row][col] !== word[index]) return false;

  board[row][col] = "*";

  const hasWord = directions(row,col).filter(([_row,_col]) => dfs(board,_row,_col,rows,cols,word,index+1)).length;
  board[row][col] = word[index];


  return hasWord;
};

const outOfBounds = (row, col, rows, cols) => {
  const isRowOutOfBound = row < 0 || row > rows - 1;
  const isColOutOfBound = col < 0 || col > cols - 1;

  return isColOutOfBound || isRowOutOfBound;
};

const directions = (row,col) => [[row - 1,col] , [row + 1, col] , [row , col - 1] , [row , col + 1]]

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";
console.log(wordSearch(board,word))