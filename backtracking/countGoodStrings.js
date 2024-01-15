const countGoodStrings = (low, high, zero, one) => {
  let mod = 10 ** 9 + 7,length = 0
  console.log(length)
  return dfs(length,low, high, zero, one, mod);
};

const dfs = (length, low, high, zero, one, mod, res = 0) => {
  if (length > high) return 0;
  if (length >= low) {
    res = 1;
  } else {
    res = 0;
  }

  res +=
    dfs(length + zero, low, high, zero, one,mod, res) +
    dfs(length + one, low, high, zero, one,mod, res);

  return res % mod;
};


let low = 2, high = 3, zero = 1, one = 2;
(console.log(countGoodStrings(low, high, zero, one)))