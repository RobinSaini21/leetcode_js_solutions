const pacificAtlantic = (heigths) => {
  const [pacificReachable,atlanticReachable] = search(heigths);

  searchGrid(heights,pacificReachable,atlanticReachable)

};

const search = (heigths = []) => {
  const [rows, cols] = [heigths.length, heigths[0].length];
  const [pacificReachable, atlanticReachable] = [
    getMatrix(rows, cols),
    getMatrix(rows, cols),
  ];
  searchRow(heigths, rows, cols, pacificReachable, atlanticReachable);
  searchCol(heigths, rows, cols, pacificReachable, atlanticReachable);
  

  return [pacificReachable,atlanticReachable]
};

const searchRow = (heigths, rows, cols, pacificReachable, atlanticReachable) => {
  for (let row = 0; row < rows; row++) {
    const [pacificStart, atlanticStart] = [0, cols - 1];
    dfs(row, pacificStart, rows, cols, pacificReachable, heigths)
    dfs(row, atlanticStart, rows, cols, atlanticReachable, heigths)
  }

  
};

const searchCol = (heigths, rows, cols, pacificReachable, atlanticReachable) => {
  for (let col = 0; col < cols; col++) {
    const [pacificStart, atlanticStart] = [0, rows - 1];
    dfs( pacificStart,col, rows, cols, pacificReachable, heigths)
    dfs( atlanticStart,col, rows, cols, atlanticReachable, heigths)
  }
};

const dfs = (row, col, rows, cols, isReachAble, heigths) => {
  isReachAble[row][col] = true;

  for (const [_row, _col] of getNeighbors(row, col, rows, cols)) {
    if (isReachAble[_row][_col]) continue;

    const isLower = heigths[_row][_col] < heigths[row][col];

    if (isLower) continue;
    dfs(_row, _col, rows, cols, isReachAble, heigths);
  }
};

const getMatrix = (rows, cols) =>
  new Array(rows).fill().map(() => new Array(cols).fill(false));

  const searchGrid = (heights, pacificReachable, atlanticReachable, intersection = []) => {
    const [ rows, cols ] = [ heights.length, heights[0].length ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const isReachable = pacificReachable[row][col] && atlanticReachable[row][col]
            if (!isReachable) continue

            intersection.push([ row, col ]);                             /* Space O(ROWS * COLS) */
        }
    }
console.log(intersection)
    return intersection;
}

var getNeighbors = (row, rows, col, cols) =>
  [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
    .map(([_row, _col]) => [row + _row, col + _col])
    .filter(
      ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols
    );

    const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];

    pacificAtlantic(heights)