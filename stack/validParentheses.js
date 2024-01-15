const validParentheses = (s) => {
  const n = s.length;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let isA = s[i] === "(";
    let isB = s[i] === "{";
    let isC = s[i] === "[";
    isA && stack.push(")");
    isB && stack.push("}");
    isC && stack.push("]");

    const isOpen = isA || isB || isC;
    if (isOpen) continue;

    const isEmpty = !stack.length;
    const isEqual = s[i] === stack.pop();
    if (isEmpty && !isEqual) return false;
  }

  return stack.length === 0;
};

const s = "()[]{}";
//console.log(validParentheses(s));

const validParenthesesV2 = (s) => {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack = [];

  for (const parenthese of s) {
    if (parenthese in map) {
      if (stack[stack.length - 1] === map[parenthese]) {
        stack.pop();
        continue;
      }
    }
    stack.push(parenthese);
  }
  console.log(stack)
};
validParenthesesV2(s);
