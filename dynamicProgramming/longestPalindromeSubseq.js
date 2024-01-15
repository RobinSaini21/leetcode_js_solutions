const longestPalindromeSubseq = (text1 = "") => {
  const n1 = text1.length;
  const tabu = initTabu(text1);

  for (let i = 0; i < n1; i++) {
    tabu[i][i] = 1;
    
  }
  return getPalindrome(tabu, text1, n1);
};

const getPalindrome = (tabu, text1 = "", n1 ) => {
  for (let i = 2; i <= n1; i++) {
    for (let j = 0; j < n1 - i + 1; j++) {
      const k = j + i - 1;
      const isMatching = text1[j] === text1[k];

      if (isMatching && i === 2) {
        tabu[j][k] = 2;
        continue;
      } 
      if (isMatching) {
        tabu[j][k] = tabu[j + 1][k - 1] + 2;
      } else {
        tabu[j][k] = Math.max(tabu[j + 1][k], tabu[j][k - 1]);
      }
    }
  }
  console.log(tabu)
};

// const tabuInit = (m, n) => new Array(m).fill().map(() => new Array(n).fill(0));
const initTabu = (text1) =>
  new Array(text1.length)
    .fill() /* Time O(N) | Space O(N) */
    .map(() => new Array(text1.length).fill(0));

    const str = "bbbab";
    longestPalindromeSubseq(str)