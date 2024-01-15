const dijkstra = (graph, startNode) => {
  let distance = {};
  let visited = {};
  let queue = [];

  for (const node in graph) {
    distance[node] = Infinity;
  }
  distance[startNode] = 0;
  queue.push(startNode);

  while (queue.length) {
    const currNode = queue.shift();
     if(visited[currNode]) continue;

    for (const node in graph[currNode]) {
      const newDistacnce = distance[currNode] + graph[currNode][node];
      if (newDistacnce < distance[node]) {
        distance[node] = newDistacnce;
        queue.push(node);
      }
    }
    visited[currNode] = true;
  }

  return distance;
};

const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
  };

  const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
