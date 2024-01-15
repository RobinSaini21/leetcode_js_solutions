const dfs = (edges, node, distance, visited) => {
  visited[node] = true;
  const neigbour = edges[node];

  if (!visited[neigbour] && neigbour !== -1) {
    distance[neigbour] = distance[node] + 1;
    dfs(edges, neigbour, distance, visited);
  }
};

const closestMeetingNode = (edges = [], node1, node2) => {
  const n = edges.length;
  let ans = -1;
  let minDist = Number.MAX_VALUE;
  const dist1 = new Array(n).fill(0);
  const dist2 = new Array(n).fill(0);
  const visited1 = new Array(n).fill(false);
  const visited2 = new Array(n).fill(false);

  dfs(edges, node1, dist1, visited1);
  dfs(edges, node2, dist2, visited2);

  for (let currNode = 0; currNode < n; currNode++) {
    if(visited1[currNode] && visited2[currNode] && minDist > Math.min(dist1[currNode], dist2[currNode])){
        minDist = Math.min(dist1[currNode], dist2[currNode]);
        ans = currNode;
    }
  }
  console.log(ans)
};


const edges = [2,2,3,-1], node1 = 0, node2 = 1;

closestMeetingNode(edges,node1,node2);