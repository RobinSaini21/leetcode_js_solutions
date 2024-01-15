const coinChange2 = (coins = [], amount) => {
  const tabu = initTabu(amount);

  return search(coins,amount,tabu)
};

const search = (coins , amount , tabu) => {
    for (const coin of coins) {
        for (let sAmount = 0; sAmount < amount + 1; sAmount++) {
            if(sAmount < coin) continue;
            tabu[sAmount] += tabu[sAmount - coin];
        }
        console.log(tabu)
    }

    return tabu[amount];
}

const initTabu = (n) => {
  const tabu = new Array(n + 1).fill(0);

  tabu[0] = 1;

  return tabu;
};

const amount = 5,
  coins = [1, 2, 5];
coinChange2(coins, amount);
