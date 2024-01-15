const wordBreak = (s = "", wordDict = []) => {
  let dp = new Array(s.length).fill(false);
  dp[0] = true;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    getWord(s, wordDict, i,dp)
  }
 console.log(dp[dp.length - 1])
};

const getWord = (s = "", wordDict = [], end,dp =[]) => {
  for (let i = end; i < s.length; i++) {
    const subString = s.substring(end, i + 1);
    const hasWord = wordDict.includes(subString) && dp[end];
   if(hasWord)  dp[i + 1] = true;
    if (wordDict.includes(subString)) return true;
  }

  return false;
};

// const s = "leetcode",
//   wordDict = ["leet", "code"];
// const  s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
const s = "applepenapple", wordDict = ["apple","pen"]
wordBreak(s, wordDict);
