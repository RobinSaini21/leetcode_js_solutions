const characterReplacement = (s, k) => {
  let longest = 0,
       right = 0,
      left = 0;
      max = 0 , frequencyMap = new Array(26).fill(0);
      while(right < s.length){
        const count = addRigthFrequency(s[right],frequencyMap);
        longest = Math.max(longest,count);  
        const window = right - left + 1;
        if(k < window - longest){
            subtractLeftFrequency(s[left],frequencyMap)
            left++
        }
        max = Math.max(max, right - left + 1);
        right++
    }
    return max;
};


const addRigthFrequency = (char,frequencyMap) => ++frequencyMap[char.charCodeAt(0) - "A".charCodeAt(0)];
const subtractLeftFrequency = (char,frequencyMap) => --frequencyMap[char.charCodeAt(0) - "A".charCodeAt(0)];

const s = "AABABBA", k = 1;
console.log(characterReplacement(s,k))