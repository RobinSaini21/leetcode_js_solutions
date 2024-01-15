const numIslands = (grid = []) => {
  let colN = grid.length,
    rowN = grid[0].length,
    res = 0
  for (let col = 0; col < colN; col++) {
    for (let row = 0; row < rowN; row++) {
        if(grid[col][row] === "1"){
            res++
            isLandDfs(grid, col, row, colN, rowN)
        }
    }
  }
  console.log(res)
};

const isLandDfs = (grid, col, row, colN, rowN) => {
  if (
    col < 0 ||
    row < 0 ||
    col >= colN ||
    row >= rowN ||
    grid[col][row] !== "1"
  ) {
    return null;
  }

  grid[col][row] = "0";

  isLandDfs(grid, col + 1, row, colN, rowN);
  isLandDfs(grid, col - 1, row, colN, rowN);
  isLandDfs(grid, col, row - 1, colN, rowN);
  isLandDfs(grid, col , row + 1, colN, rowN)
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
numIslands(grid)