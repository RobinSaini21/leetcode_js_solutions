const maxProfitWithCoolDown = (prices = []) => {
    let tabu = initTabu(prices.length);
    return search(prices,tabu);
}

const initTabu = (n) => new Array(n + 2).fill(0);

const search = (prices  = [], tabu) =>{
    for (let i = prices.length - 1; 0 <= i  ; i--) {
        const prev = buyAndSell(prices,i,tabu)
        const next = tabu[i + 1];

        tabu[i] = Math.max(prev, next);  
    }
console.log(tabu)
    return tabu[0]
}

const buyAndSell = (prices = [], i , tabu , max = 0) =>{
    for (let sell = i + 1; sell < prices.length; sell++) {
        const profit = (prices[sell] - prices[i]) + tabu[sell + 2] 

        max = Math.max(profit,max)
        

    };

    return max
}

const prices = [1,2,3,0,2];

maxProfitWithCoolDown(prices);