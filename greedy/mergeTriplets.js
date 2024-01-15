const mergeTriplets = (triplets = [], target = []) => {
  const tripletsN = triplets.length,
    targetN = target.length;
  let count = 0;

  for (let i = 0; i < tripletsN; i++) {
    if (
      verfiyTriplets(
        [
          Math.max(triplets[i][0], target[0]),
          Math.max(triplets[i][1], target[1]),
          Math.max(triplets[i][2], target[2]),
        ],
        target,
        targetN
      )
    ) {
        count++;
    }
  }
  console.log(count)
  return count > 0
};
const verfiyTriplets = (mergedTriplets, target, n) => {
  for (let i = 0; i < n; i++) {
    const isEqual = mergedTriplets[i] === target[i];
    if(!isEqual) return false;
  }

  return true
};
// const triplets = [
//     [2, 5, 3],
//     [2, 3, 4],
//     [1, 2, 5],
//     [5, 2, 3],
//   ],
//   target = [5, 5, 5];

const triplets = [
    [2, 5, 3],
    [1, 8, 4],
    [1, 7, 5],
  ],
  target = [2, 7, 5];

console.log(mergeTriplets(triplets, target))
