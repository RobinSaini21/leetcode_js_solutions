const maxProfit = (prices) =>{
    const n = prices.length;
    let profit = 0;
      for (let i = 0; i < n; i++) {
  
       if(prices[i] < prices[i + 1]){
        profit += prices[i + 1] - prices[i]
       } 
    }
console.log(profit)
}

const prices = [7,1,5,3,6,4];
maxProfit(prices);