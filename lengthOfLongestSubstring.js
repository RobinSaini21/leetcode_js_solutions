const lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    max = 0;
  let set = new Set();
  
  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, set.size);
    right++
  }
  return max
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s))
