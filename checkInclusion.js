const checkInclusion = (s1, s2) => {
  const [frequencyS1, frequencyS2] = getFrequency(s1, s2);
  let left = 0,
    right = 0,
    n = s2.length;
    let window = 0;
    while (right < n) {
        addRigthFrequency(s2[right],frequencyS2)
       window = right - left;
       if(window === s1.length && isEqual(frequencyS1,frequencyS2)) return true;

       if(window >= s1.length){
        subtractLeftFrequency(s2[left],frequencyS2)
        left++
       }
    right++
    }

    return false
};


const isEqual = (frequencyS1,frequencyS2) =>{
    for (let i = 0; i < 26; i++) {
        if(!frequencyS1[i] === frequencyS2[i]) return false;
    }

    return true;
}

const getFrequency = (s1, s2) => {
  const [frequencyS1, frequencyS2] = new Array(2)
    .fill()
    .map(() => new Array(26).fill(0));

  for (const s of s1) addRigthFrequency(s, frequencyS1);

  return [frequencyS1, frequencyS2];
};

const addRigthFrequency = (char, frequencyMap) =>
  ++frequencyMap[char.charCodeAt(0) - "a".charCodeAt(0)];
const subtractLeftFrequency = (char, frequencyMap) =>
  --frequencyMap[char.charCodeAt(0) - "a".charCodeAt(0)];

const s1 = "ab",
  s2 = "eidbaooo";
console.log(checkInclusion(s1, s2))
