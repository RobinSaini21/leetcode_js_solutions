const maximumRemovals = (s, subS, removable) => {
  let left = 0,
    right = removable.length - 1,set = new Set(),res = 0;
  while (left <= right) {
    const mid = (left + right) >> 1;
//console.log(mid)
   set.add(removable[mid])
   console.log(isSubSequce(s,subS,set))
   if(isSubSequce(s,subS,set)){
    res = Math.max(res,mid)
    left = mid + 1
   }  else {
    right = mid - 1;
   }
  }
  console.log(res)
};

const isSubSequce = (s, subS, removed) => {
  let i = 0,
    j = 0;
//console.log(removed)
  while (i < s.length - 1 && j < subS.length - 1) {
  //console.log(s[i] === subS[j])
    if (removed.has(i) || s[i] != subS[j]) {
      i++;
      continue;
    }
    if(s[i] === subS[j]){
        i++;
        j++;
    }
   
  }
  return j === subS.length -1;
};


// const s = "abcacb", p = "ab", removable = [3,1,0];

const s = "abcbddddd", p = "abcd", removable = [3,2,1,4,5,6];
maximumRemovals(s,p,removable)