const isAnagram = (s, t) => {
  const map = new Map();
  addFrequency(s, map);
  removeFreqency(t, map);
  
  return checkAnagram(map)
};

const addFrequency = (anagramString, map) => {
  for (const s of anagramString) {
    map.set(s, map.get(s) + 1 || 1);
  }
  console.log(map)
  return map;
};

const removeFreqency = (anagramString, map) => {
  for (const s of anagramString) {
    map.set(s , map.get(s)  - 1)
  }
};

const checkAnagram = (map) =>{

  for (const [key , value] of map) {
    if(value > 0) return false
  }
return true
}

const s = "rat",
  t = "cat";

console.log(isAnagram(s, t))
