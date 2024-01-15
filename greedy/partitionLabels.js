const partitionLabels = (s = "") => {
  let hash = {},
    size = 0,
    end = 0,
    res = [];

  for (const i in s) {
    hash[s[i]] = i;
  }

  for (const i in s) {
    const char = s[i];
    end = Math.max(end, hash[char]);
    size++;
    if (parseInt(i) === end) {
      res.push(size);
      size = 0;
    }
  }
  console.log(res)
};

const s = "ababcbacadefegdehijhklij";
partitionLabels(s);
