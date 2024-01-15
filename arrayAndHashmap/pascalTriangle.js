const pascalTriangle = (numRows) => {
  let pascalArr = [];
  for (let i = 0; i < numRows; i++) {
    let innerArr = [];
    innerArr[0] = innerArr[i] = 1;
    pascalArr[i] = innerArr;
    for (let j = 0; j < innerArr.length; j++) {  
        if(pascalArr[i].length <= 2) continue;
        if(j === 0 || j === i) {
            pascalArr[i][j] = 1;
            continue;
        }
        pascalArr[i][j] = pascalArr[i-1][j-1] + pascalArr[i-1][j]
    }
  }
  console.log(pascalArr);
};

pascalTriangle(5);
