const arrangeCoins = (n) =>{
    let completeRow = 0;
    for (let i = 0; i <= n ;i++) {
      for (let j = 0; j <= i; j++) {
        if(i > n) return completeRow;
        n--
      }
    completeRow += 1
    }

    return completeRow
}

console.log(arrangeCoins(8))