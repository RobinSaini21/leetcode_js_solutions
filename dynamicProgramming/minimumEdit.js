const miniMumEdit = (str1_ = "", str2_ = "") => {
  const ROW = str1_.length;
  const COL = str2_.length;
  const STR_1 = "#" + str1_;
  const STR_2 = "#" + str2_;
  let dp = new Array(ROW + 1).fill().map(() => new Array(COL + 1).fill(0));

  for (let i = 0; i <= ROW; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i <= COL; i++) {
    dp[0][i] = i;
  }

  for (let row = 1; row <= ROW; row++) {
    for (let col = 1; col <= COL; col++) {
      if (STR_1[row] === STR_2[col]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) + 1;
      }
    }
  }
  console.log(dp)
};

const STR_1 = "abcdef";
const STR_2 = "azced";

miniMumEdit(STR_1, STR_2);
