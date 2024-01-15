const hasAllCodes = (s, k) => {
  let set = new Set(),
    n = s.length;

  for (let i = 0; i < n; i++) {
    const subs = s.substring(i, i + k);
    if (subs.length < k) continue;
    set.add(subs);
  }
  console.log(set.size);
};
const s = "00110110",
  k = 2;
hasAllCodes(s, k);
