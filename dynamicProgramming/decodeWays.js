const numDecodings = (s = "") => {
  const n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 0; i <= n; i++) {
    const oneLetter = parseInt(s[i - 1]);
    const twoLetters = parseInt(s.slice(i - 2 , i));
    
    if(oneLetter > 0 && oneLetter <= 9){
        dp[i] += dp[i - 1]
    } 


    if(twoLetters > 9 && twoLetters <= 26){
        dp[i] += dp[i - 2]
    } 
    
  }

  console.log(dp)
};
const s = "226";
numDecodings(s)