const findAnagrams = (s,p) =>{
const win = p.length, n = s.length, res =[];

for (let i = 0; i < n; i++) {
    let substring = s.substring(i,i+win).split("").sort().join("");
    if(substring === p){
        res.push(i)
    }
    
}
console.log(res)
}

const s = "cbaebabacd", p = "abc";
findAnagrams(s,p)
