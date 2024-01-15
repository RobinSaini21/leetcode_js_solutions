const minFlips = (s) => {
  let alt1 = "";
  let alt2 = "";
  let str = s + s;
  let n = s.length;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < s.length; i++) {
    alt1 += i % 2 == 0 ? "0" : "1";
    alt2 += i % 2 == 0 ? "1" : "0";
  }

  for (let i = 0; i < str.length; i++) {
    let subString = str.substring(i, i + n);

    if (subString.length < n) break;
min = Math.min(min,countFlips(subString,alt1,alt2))

  }
  console.log(min)
};

const countFlips = (s,alt1,alt2) =>{
    let count1 = 0 ,  count2 = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== alt1[i]) count1++;
        if(s[i] !== alt2[i]) count2++;
    }

    return Math.min(count1,count2)
}

const s = "111000";

minFlips(s);
