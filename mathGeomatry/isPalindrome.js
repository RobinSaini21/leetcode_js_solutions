const isPalindrome = (num = 0) => {
 const stringNum = `${num}`;
 const n = stringNum.length - 1;

 for (let i = 0; i <= n; i++) {
    if(!(stringNum[i] === stringNum[n - i])) return false
    
 }

 return true
}

const num = 1321
isPalindrome(num)