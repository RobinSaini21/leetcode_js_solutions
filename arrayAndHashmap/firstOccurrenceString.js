const firstOccurrenceString = (s,needle) =>{
    let n = s.length; let win = needle.length;

    for (let i = 0; i < n; i++) {
        let sub = s.substring(i,i+win)
        if(sub === needle){
            return i
        }
    }

    return -1
}



//const haystack = "sadbutsad", needle = "sad";
const  haystack = "leetcode", needle = "leeto"

console.log(firstOccurrenceString(haystack,needle))