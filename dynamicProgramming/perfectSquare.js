const perfectSquare = (n) => {
  let tabu = initTabu(n + 1);
  tabu[0] = 0
  let count = 1;
  while (count * count <= n) {
    let sq = count * count;
    for (let i = sq; i < n + 1; i++) {
        tabu[i] = Math.min(tabu[i - sq] + 1 , tabu[i])
        
    }

    
    count++;
  }
  console.log(tabu)
  console.log(tabu[n])
}

const initTabu = (n) => 
    new Array((n)).fill(Number.MAX_SAFE_INTEGER)   

const n = 12
perfectSquare(n)