const merge = (intervals = []) => {
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
    aStart !== bStart ? aStart - bStart : aEnd - bEnd
  );
  return mergerInterval(intervals);
};

const mergerInterval = (intervals = []) => {
  let prev = intervals.shift();
  const res = [];
  for (const curr of intervals) {
    const [currStart, currEnd] = curr;
    const [prevStart, prevEnd] = prev;

    const isOverLapping = currStart < prevEnd;

    if(isOverLapping){
        prev[1] = Math.max(currEnd,prevEnd);
        continue;
    }
    res.push(prev);
    prev = curr;
  }
  console.log([...res,prev])
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
merge(intervals);
