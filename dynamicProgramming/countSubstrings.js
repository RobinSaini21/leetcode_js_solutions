const countSubstrings = (s = "") => {
  const n = s.length;
  let count = 0;
  const tabu = tabuInit(n);
  count += countSingle(n, tabu);
};
const tabuInit = (n) => new Array(n).fill().map(() => new Array(n).fill(false));

const countSingle = (n, tabu, count = 0) => {
  for (let i = 0; i < n; i++) {
    tabu[i][i] = true;
    count += Number(tabu[i][i]);
  }
  return count;
};

const doubleLetters = (n, tabu, s, count = 0) => {
  for (let i = 0; i < n; i++) {
    const [left, right] = [s[i], s[i + 1]];
    const isEqual = left === right;

    tabu[i][i + 1] = isEqual;

    count += Number(tabu[i][i + 1]);
  }
};



const s = "aaa";

countSubstrings(s);
