const maximumRemovals = (s, p, removable) => {
  let n = removable.length,
    marked = new Array(s.length).fill(false);
let count = 0
  for (let i = 0; i < n; i++) {
    marked[removable[i]] = true;
    if (hasSub(marked, s, p, i)) {
count++;
    }
  }

  console.log(count);
};

const hasSub = (marked, s, p, k) => {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (marked[i]) continue;
    for (let j = 0; j < p.length; j++) {
      if (s[i] === p[j]) {
        res.push(true);
      }
    }

    console.log(res)
    if(res.length === 2){
        return true
    }
  }

  return false
};

const s = "abcacb",
  p = "ab",
  removable = [3, 1, 0];

maximumRemovals(s, p, removable);
