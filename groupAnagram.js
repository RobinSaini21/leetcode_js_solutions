const groupAnagram = (strs) => {
  const map = new Map();
  for (const str of strs) {
    const genHash = genrateHash(str);
    const hashArr = map.get(genHash) || [];
    hashArr.push(str);
    map.set(genHash, hashArr);
  }
  return [...map.values()];
};

const genrateHash = (str) => {
  const hashArray = new Array(26).fill(0);
  const hash = getHash(hashArray, str);

  return hash.join("");
};

const getHash = (arr, str) => {
  for (const s of str) {
    const getCharNumb = s.charCodeAt(0) - "a".charCodeAt(0);
    ++arr[getCharNumb];
  }
  return arr;
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(strs));
