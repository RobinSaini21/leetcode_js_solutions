const gridGame = (grid) => {
    let one = grid[0].reduce((a,b)=>a+b) - grid[0][0];
    let two = 0;
    let res = one;

for (let i = 1; i < grid[0].length; i++) {
    one -= grid[0][i];
    two += grid[1][i-1];
    res = Math.min(res, Math.max(one,two));
}
console.log(res)
};



const grid = [[2,5,4],
              [1,5,1]];

gridGame(grid)
