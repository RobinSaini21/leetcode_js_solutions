const dfs = (graph, currNode, visited, result) => {
    result.push(currNode)
 visited[currNode] = true;

  let edges = graph[currNode];

  for (const _edge of edges) {
    if(!visited[_edge]){
dfs(graph,_edge,visited,result)
    }
  }
};

const dfsTraversal = (graph, startNode) => {
  let result = [] ;
  let visited = {};

  dfs(graph, startNode, visited, result);
  console.log(result)
};

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};


dfsTraversal(graph , "A")