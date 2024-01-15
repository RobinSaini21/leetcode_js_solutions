const validateStackSequences = (pushed = [], popped = []) =>{
let stack = [];
let index = 0;

for (const num of pushed) {
    stack.push(num);

    while (stack.length && stack[stack.length - 1] === popped[index]) {
        stack.pop();
        index++;
    }
  }
  console.log(stack.length)
}

const pushed = [1,2,3,4,5], popped = [4,5,3,2,1];
validateStackSequences(pushed,popped)