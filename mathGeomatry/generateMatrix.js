const generateMatrix = (n) => {
  const matrix = getMatrix(n);
  const [cols, rows] = [matrix.length - 1, n -1];
  let [top, left, right, bot] = [0, 0, rows, cols];
  let count = 1;

  const isBounding = () => top <= bot && left <= right;

  while (isBounding()) {
    // addTop(matrix, top, left, right, bot,count );
    //ADDING TOP
    for (let top_ = left; top_ <= right; top_++) {
        matrix[top][top_] = count;
          count++
        }


    top++;

    //ADDING RIGTH
    //addRight(matrix, top, left, right, bot,count );
    for (let top_ = top; top_ <= bot; top_++) {
        matrix[top_][right] =count;
        count++;
      }
    right--;

    const hasRow = top <= bot;

    if (hasRow) {

     // addBottom(matrix, top, left, right, bot,count );
   //ADDING BOTTOM
     for (let bot_ = right; bot_ >= left; bot_--) {
        matrix[bot][bot_] = count;
        count++;
      }
      bot--;
    }

    const hasCol = left <= right;
    if (hasCol) {
     // addLeft(matrix, top, left, right, bot,count );
//ADDING LEFT
     for (let left_ = bot; left_ >= top; left_--) {
        matrix[left_][left] = count;
        count++;
      }
      left++;
    }
  }
  console.log(matrix)
};

const addTop = (matrix, top, left, right, bot,count) => {
  for (let top_ = left; top_ <= right; top_++) {
  matrix[top][top_] = count;
    count++
  }
  return count
};

const addRight = (matrix, top, left, right, bot,count )=> {
  for (let top_ = top; top_ <= bot; top_++) {
    matrix[top_][right] =count;
    count++;
  }
};

const addBottom = (matrix, top, left, right, bot,count )=> {
  for (let bot_ = right; bot_ >= left; bot_--) {
    matrix[bot][bot_] = count;
    count++;
  }
};

const addLeft = (matrix, top, left, right, bot,count ) => {
  for (let left_ = bot; left_ >= top; left_--) {
    matrix[left_][left] = count;
    count++;
  }
};

const getMatrix = (n) => new Array(n).fill().map(() => []);
generateMatrix(3);
