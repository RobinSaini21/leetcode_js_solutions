const coinChange = (coins,amount) =>{
let tabu = initTabu(amount);

return findMinimumCoin(coins,amount,tabu)
}


const findMinimumCoin = (coins,_amount,tabu) =>{
    const coinNumber = coins.length;

    for (let coin = 0; coin < coinNumber; coin++) {
        for (let amount = 0; amount < _amount + 1 ; amount++) {
            if(amount < coins[coin]) continue;

            const tabuAmount = tabu[amount];
            const diffrence = amount - coins[coin];

            tabu[diffrence] = Math.min(tabu[diffrence] + 1 , tabuAmount)
            
        }
        
    }

    console.log(tabu)
}

const initTabu =(amount) =>{
   const tabu = new Array(amount + 1).fill(amount + 1);
   
   tabu[0] = 0;

   return tabu
}

const coins = [1,2,5] , amount = 11;

coinChange(coins,amount)