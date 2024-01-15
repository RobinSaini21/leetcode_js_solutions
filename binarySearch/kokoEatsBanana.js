const kokoEatsBanana = (piles, h) => {
  let [left, right] = [0, Math.max(...piles)];

  while (left < right) {
    const mid = (left + right) >> 1;

    const hoursSpend = getHourSpend(piles, mid);
    if (hoursSpend <= h) right = mid;
    if (hoursSpend > h) left = mid + 1;
  }
  return right;
};

const getHourSpend = (piles, h, timeSpend = 0) => {
  for (const pile of piles) {
    timeSpend += Math.ceil(pile / h);
  }

  return timeSpend;
};
const piles = [3, 6, 7, 11],
  h = 8;

  kokoEatsBanana(piles,h);