const isInterleave = (s1 = "", s2 = "", s3 = "") => {
  const m = s1.length,
    n = s2.length;

  let tabu = initTabu(m, n);

  return search(s1, s2, s3, tabu, m, n);
};

const search = (s1, s2, s3, tabu, m, n) => {
  for (let col = 0; col <= m; col++) {
    for (let row = 0; row <= n; row++) {
      tabu[col][row] = hasMatched(s1, s2, s3, col, row, tabu);
    }
  }

  console.log(tabu[m][n]);
};

const hasMatched = (s1, s2, s3, i, j, tabu) => {
  const isBaseCase1 = i === 0 && j === 0;
  if (isBaseCase1) return true;

  if (i === 0) {
    return addRight(s1, s3, i, j, tabu);
  }
  if (j === 0) {
    return addLeft(s2, s3, i, j, tabu);
  }

  const right = addRight(s1, s3, i, j, tabu);
  const left = addLeft(s2, s3, i, j, tabu);

  return right || left;
};

const addRight = (s1, s3, i, j, tabu) =>  tabu[i][j - 1] && s1[j - 1] === s3[i + j - 1];


const addLeft = (s2, s3, i, j, tabu) =>
  tabu[i - 1][j] && s2[i - 1] === s3[i + j - 1];

const initTabu = (m, n) =>
  new Array(m + 1).fill().map(() => new Array(n + 1).fill(null));

const s1 = "aabcc",
  s2 = "dbbca",
  s3 = "aadbbcbcac";

isInterleave(s1, s2, s3);
