const lastStoneWeightII = (stones = []) => {
  const memo = new Map();
  const findMinWeight = (idx, weigth1, weigth2) => {
    let key = `${idx}+${weigth1}+${weigth2}`;

    if (stones.length === idx) return Math.abs(weigth1 - weigth2);
    if (memo.has(key)) return memo.get(key);

    const currWeight = stones[idx];

    const min = Math.min(
      findMinWeight(idx + 1, weigth1 + currWeight, weigth2),
      findMinWeight(idx + 1, weigth1, weigth2 + currWeight)
    );
    memo.set(key,min);

    return min
  };

   findMinWeight(0,0,0);

  console.log(memo)
};

//const stones = [2, 7, 4, 1, 8, 1];
const stones = [31, 26, 33, 21, 40];
lastStoneWeightII(stones);
