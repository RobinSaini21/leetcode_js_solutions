const removeCoveredIntervals = (intervals = []) => {
  let prev = intervals.shift();
  const n = intervals.length;

  for (let i = 0; i < n; i++) {
    const [prevStart, prevEnd] = prev;
    const [currStart, currEnd] = intervals[i];

    const isCoverInterVal = currStart < prevStart && currEnd > prevEnd;

    if(!isCoverInterVal) {
        prev = intervals[i];
        continue
    };
console.log(i+1)
    return i + 1
  }

  return intervals.length;
};

const intervals = [[1,4],[3,6],[2,8]];
removeCoveredIntervals(intervals)
