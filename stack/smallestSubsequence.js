const smallestSubsequence = (chars) => {
  let stack = [],
    lastOcur = {},
    seen = new Set;
  const N = chars.length;

  for (let i = 0; i < N; i++) {
    lastOcur[chars[i]] = i;
  }
  
  for (let i = 0; i < N; i++) {
    const char = chars[i];
if(seen.has(char)) continue;
    while (stack.length && char < stack[stack.length - 1] && i < lastOcur[stack[stack.length - 1]]) {
        const removedChar = stack.pop();
        seen.delete(removedChar);
    };
    
  stack.push(char);
  seen.add(char)
  };

  console.log(stack)

};

const s = "cbacdcbc";
smallestSubsequence(s);