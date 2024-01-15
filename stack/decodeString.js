const decodeString = (s) => {
let stack = [];
    let num = 0;
    let result = "";

    for (const char of s) {
        if(char === "["){

           stack.push(num);
           stack.push(result);
           num = 0;
           result = ""
        } else if( char === "]"){
         const prevResult = stack.pop();
         const repeatCount = stack.pop();
         result = prevResult + result.repeat(repeatCount);
        } else if(isNaN(char)){
            
         result += char;
        } else {
            num = parseInt(char);
        }
    }
console.log(result)
}

const str = "3[a]2[bc]";
decodeString(str)