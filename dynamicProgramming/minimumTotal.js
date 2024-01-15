const minimumTotal = (triangle = []) => {
  const n = triangle.length;
   let min = Number.MAX_SAFE_INTEGER;
   let result = 0;
  for (let i = n - 1; i >= 0; i--) {
    const row = triangle[i];
    for (let j = 0; j < row.length; j++) {
        min = Math.min(min , row[j])
        
    }
    result += min
    min = Number.MAX_SAFE_INTEGER;
  }
  console.log(result)
}

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];

minimumTotal(triangle)