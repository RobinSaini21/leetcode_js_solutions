const minPathSum = (grid =[]) => {
  const n = grid.length , m = grid[0].length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if(i === 0 && j > 0){
            grid[i][j] = grid[i][j] + grid[i][j - 1]
        } else if(i > 0 && j === 0){
            grid[i][j] = grid[i][j] + grid[i - 1][j]
        } else if ( i === 0 && j === 0){
            grid[i][j] = grid[i][j]
        } else {
            grid[i][j] = Math.max(grid[i][j - 1],grid[i - 1][j]) + grid[i][j]
        }
        
    }
    
  }

  console.log(grid)
}

const grid = [[1,3,1],[1,5,1],[4,2,1]]
minPathSum(grid)