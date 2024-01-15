const numSquares = (n) => {
    const tabu = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
tabu[0] = 0
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            const square = j * j;
            const isToo = i - square < 0
            if(isToo) break;

            tabu[i] = Math.min(tabu[i] , tabu[i - square] + 1)
            
        }
        
    }

    console.log(tabu);
}


numSquares(13)