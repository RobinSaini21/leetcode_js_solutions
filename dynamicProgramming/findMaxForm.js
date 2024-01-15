const findMaxForm = (strs = [], m, n) => {
  let res = 0;
  for (const str of strs) {
    const {atM , atN} = getFrequency(str);
if(atM <= m && atN <= n){
    res++
}
  }
  console.log(res)
};

const getFrequency = (str = "") => {
    let hash = {};
    for (const char of str) {
        hash[char] ? hash[char] += 1 : hash[char] = 1;
    };

    return {atM: hash["0"] ? hash["0"] : 0  , atN: hash["1"] ? hash["1"] : 0}
}

const strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3;
findMaxForm(strs,m,n)