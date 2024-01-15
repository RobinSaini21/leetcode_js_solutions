const successfulPairs = (spells = [], potions = [], success) => {
  const TOTAL_SPELLS = spells.length;
  const TOTAL_POTIONS = potions.length;
  let pairs = [];
  potions.sort((a,b) => a - b);
  for (let i = 0; i < TOTAL_SPELLS; i++) {
    const SPELL = spells[i];
    let left = 0;
    let right = TOTAL_POTIONS - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const product = SPELL * potions[mid];

      if (product >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    pairs[i] = TOTAL_POTIONS - left;
  }
  console.log(pairs);
};

const spells = [5,1,3], potions = [1,2,3,4,5], success = 7;
successfulPairs(spells,potions,success)
