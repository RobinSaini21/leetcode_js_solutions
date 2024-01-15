
const removeStars = (string = "") => {
  let stack = [];

  for (const str of string) {
    if(str === "*"){
        stack.pop()
        continue;
    }
    stack.push(str)
  }

  console.log(stack)
}

const s = "leet**cod*e"

removeStars(s)