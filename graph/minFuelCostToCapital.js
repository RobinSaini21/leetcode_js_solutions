const minFuelCostToCapital = (roads, seat) => {
  const graph = new Map();
  for (const [a, b] of roads) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a).push(b);
    graph.get(b).push(a);
  }

  const dfs = (node, parent) => {
    let totalFuel = 0;

    for (const child of graph.get(node)) {
    if(child === parent) continue;
    totalFuel += dfs(child , node);
    };
    return Math.ceil(totalFuel / seat) + 1
  };

  return dfs(0 , -1) - 1
};

const roads2 = [
  [3, 1],
  [3, 2],
  [1, 0],
  [0, 4],
  [0, 5],
  [4, 6],
];
const seats2 = 2;
console.log(minFuelCostToCapital(roads2, seats2));
