const restoreIpAddresses = (s = "") => {
  let res = [];

  const backTrack = (i, dots, currentIP) => {
    if (dots === 4 && i === s.length) {
      res.push(currentIP.slice(0, currentIP.length - 1));
      return;
    } else if (dots > 4) {
      return;
    }
    for (let j = i; j < Math.min(i + 3, s.length); j++) {
      if (+s.slice(i, j + 1) < 256 && (i === j || s[j] !== "0")) {
        backTrack(j + 1, dots + 1, currentIP + s.slice(i, j + 1) + ".");
      }
    }
  };
  backTrack(0,0,"");
  console.log(res)
};
 
const s = "25525511135"
restoreIpAddresses(s)