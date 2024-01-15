const validSudoku = (board) =>{
    const [row,col,box]  = [genrateArray(9) ,genrateArray(9),genrateArray(9)]
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const char = board[i][j]
            const index = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if(char === ".") continue

           if(row[i][char] || col[j][char] || box[index][char]) return false;
           box[index][char]  = true
           row[i][char] = true;
           col[j][char] = true
        }
        
    }
    
    return true
}

const genrateArray = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push([]);
    }
  
    return arr;
  };


  const board =[["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"] ]

console.log(validSudoku(board))
