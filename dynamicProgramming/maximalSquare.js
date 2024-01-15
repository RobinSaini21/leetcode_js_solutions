const maximalSquare = (matrix = []) => {
 const [row , col] = [matrix[0].length , matrix.length]
  let tabu = initTabu(row,col);

  for (let i = 0; i < col; i++) {
    tabu[i][0] = parseInt(matrix[i][0])
    
  }

  for (let i = 0; i < row; i++) {
    tabu[0][i] = parseInt(matrix[0][i])
    
  }


  return getMaxSquare(matrix , tabu)
}
 
const getMaxSquare = (matrix , tabu , result = 0) => {
    const [rows , cols] = [matrix[0].length , matrix.length];
    for (let col = 1; col < cols; col++) {
     for (let row = 1; row < rows; row++) {

       if(matrix[col][row] === "1") {
        tabu[col][row] = Math.min(Math.min(tabu[col][row - 1],tabu[col - 1][row - 1]),tabu[col - 1][row]) + 1;
        //  console.log(tabu[col][row], col , row,tabu[col][row - 1],tabu[col - 1][row - 1],tabu[col - 1][row])
          result = Math.max(tabu[col][row]  , result)
       }
        
     }
        
    }
    console.log(result)
}

const initTabu = (row, col) => 
    new Array((col)).fill()                /* Time O(N) | Space O(N) */
        .map(() => new Array((row)).fill(0));

const matrix = [["1","0","1","0","0"]
               ,["1","0","1","1","1"],
                ["1","1","1","1","1"],
                ["1","0","0","1","0"]];
maximalSquare(matrix)