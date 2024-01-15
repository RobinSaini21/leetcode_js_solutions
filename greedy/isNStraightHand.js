const isNStraightHand = (hand = [], groupSize) => {
  const freqency = getFreqency(hand);
  const uniqueHands = getUnique(hand);
console.log(uniqueHands)
  
  return getStraightHand(freqency,uniqueHands,groupSize);
};

const getFreqency = (hands = [], map = new Map()) => {
  for (const hand of hands) {
    map.has(hand) ? map.set(hand, map.get(hand) + 1) : map.set(hand, 1);
  }
  return map;
};

const getUnique = (hands) => [...(new Set( (hand) ))].sort((a,b) => b - a);

const getStraightHand =  (freqency = new Map , uniqueHands = [],groupSize) =>{
while (uniqueHands.length) {
    const smallestElement = uniqueHands[uniqueHands.length - 1];
    for (let i = 0; i < smallestElement  + groupSize - 1; i++) {
        if(!freqency.has(i));

        freqency.set(i,freqency.get(i) - 1)

        if(freqency.get(i) !== 0) continue;

        if(i !== uniqueHands[uniqueHands.length - 1]) return false
        uniqueHands.pop()
    }
}

return true;
}

const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
  groupSize = 3;

console.log(isNStraightHand(hand, groupSize))
