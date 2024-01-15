const eraseOverlapIntervals = (intervals = []) =>{
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
    aEnd !== bEnd ? aEnd - bEnd : aStart - bStart
);

return getGap(intervals);
}
const getGap = (intervals = []) =>{
    const prev = intervals.shift();
let gap  = 0;
    for (const curr of intervals) {
        const [currStart, currEnd] = curr;
        const [prevStart, prevEnd] = prev;

        const hasGap = prevEnd <= currEnd;

        if(!hasGap) continue;

        prev[1] = curr[1];
        gap++;
    }
    console.log(intervals.length + 1 - gap)
}
const intervals = [[1,2],[2,3],[3,4],[1,3]];
eraseOverlapIntervals(intervals)