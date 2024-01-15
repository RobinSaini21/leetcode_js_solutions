const removeDuplicates = (str,k) =>{
    let stack = [], hashMap = new Map()
    for (const s of str) {
        hashMap.set(s,(hashMap.get(s) || 0) + 1)
        stack.push(s)

      if(hashMap.get(s) === k){
        while(hashMap.has(s)){
            stack.pop();
            hashMap.set(s,hashMap.get(s) - 1)
            if(hashMap.get(s) === 0){
                hashMap.delete(s)
            }
        }
      }
    }
    console.log(stack)
}

const s = "pbbcggttciiippooaais", k = 2;
//const s = "deeedbbcccbdaa", k = 3
removeDuplicates(s,k)