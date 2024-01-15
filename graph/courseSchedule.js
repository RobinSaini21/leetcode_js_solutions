const canFinish = (prerequisites = []) => {
  const graph = buildGraph(prerequisites);
  let visited = {};
  let queue = [];
  queue.push(Object.keys(graph)[0]);
  while (queue.length) {
    const edges = queue.shift();
    visited[edges] = true;
    if(!graph[edges]) continue;
    for (const node of graph[edges]) {
        if(visited[node]){
            return false
        }
      if (!visited[node]) {
        queue.push(node);
      }
    }
  }
};

const buildGraph = (prerequisites = []) => {
  const graph = {};
  for (const prerequisite of prerequisites) {
    const [origin, destination] = prerequisite;
    const nodes = graph[origin] || [];
    nodes.push(destination);

    graph[origin] = nodes;
  }

  return graph;
};

// let prerequisites = [
//   [0, 1],
//   [0, 2],
//   [1, 3],
//   [1, 4],
//   [3, 4],
// ];

const prerequisites =  [[1,0],[0,1]]
console.log(
    canFinish(prerequisites)
    )