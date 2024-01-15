const insertIntervals = (intervals = [],newInterval = []) => {
    const before = getBefore(intervals,newInterval)
    const { index: mergeIndex , newInterval: mNewInterVals } = mergeInter(intervals,newInterval);
    const after = intervals.slice(mergeIndex);

    console.log([...before,mNewInterVals,...after])
};

const getBefore = (intervals = [], newIntervals = []) => {
  let index = 0;
  let res = [];
  const hasGap = ([perviousStart, perviousEnd], [currentStart, currentEnd]) =>
    perviousEnd < currentStart;

  while (index < intervals.length && hasGap(intervals[index], newIntervals)) {
    res.push(intervals[index]);
    index++;
  }
  return res;
};

const mergeInter = (intervals = [], newInterval = []) => {
let index = 0;
const hasGap = ( [perviousStart,perviousEnd] , [currentStart, currentEnd]) => currentStart < perviousEnd;

while (index < intervals.length && hasGap(newInterval,intervals[index])) {
const current = intervals[index];
    newInterval[0] = Math.min(current[0], newInterval[0]);
    newInterval[1] = Math.max(current[0],newInterval[1]);

    index++;
    
}

return {newInterval , index};
} 

const intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];

  insertIntervals(intervals,newInterval);
