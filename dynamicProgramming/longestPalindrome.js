const longestPalindrome = (s = "") => {
  const longestString = search(s);
  console.log(longestString)
};

const search = (s = "", res = "") => {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const subString1 = getPalindrome(s, n, i, i);
    const subString2 = getPalindrome(s, n, i, i + 1);
  if(res.length < subString1.length || res.length <  subString2.length){
    if (subString1.length > subString2.length ) {
        res = subString1;
      } else if (subString1.length === subString2.length) {
        res = subString2;
      } else {
        res = subString1;
      }
  }
    //  console.log(subString1,subString2)
  }
  return res;
};

const getPalindrome = (s = "", n, left, right, subS = "") => {
  const isExpandable = () => left >= 0 && right < n;
  const isEqual = () => s[left] === s[right];
  const isPalindrome = () => isEqual() && isExpandable();

  while (isPalindrome()) {
    const subString = s.slice(right, left + 1);
    if (subString.length > subS.length) {
      subS = subString;
    }
    left++;
    right--;
  }

  return subS;
};
const s = "babad";
longestPalindrome(s);
