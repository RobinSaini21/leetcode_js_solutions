const shipWithinDays = (weights = [], days) => {
  let left = Math.max(...weights);
  let right = weights.reduce((acc, curr) => acc + curr, 0);

  while (left < right) {
    console.log(left)
    const mid = Math.floor((left + right) / 2);
    let currentWeight = 0;
    let shipsRequired = 1;

    for (const weight of weights) {
      if (currentWeight + weight > mid) {
        shipsRequired++;
        currentWeight = 0;
      };
      currentWeight += weight;
    };

    if(shipsRequired > days){
        left = mid + 1;
    } else {
        right = mid - 1;
    };
  };
  console.log(left)
};

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  days = 5;
  shipWithinDays(weights,days);
