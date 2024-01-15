const uniquePaths = (m, n) => {
  const tabu = tabuInit(m, n);

  return getPaths(tabu, m, n);
};

const getPaths = (tabu, m, n) => {
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      const [top, left] = [tabu[row - 1][col], tabu[row][col - 1]];
      tabu[row][col] = top + left;
    }
  }
  return tabu[m - 1][n-1];
};

const tabuInit = (m, n) => {
  let tabu = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    tabu[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    tabu[0][i] = 1;
  }

  return tabu;
};

const m = 3,
  n = 7;
uniquePaths(m, n);
