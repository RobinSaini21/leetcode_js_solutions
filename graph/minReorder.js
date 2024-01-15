const minReorder = (n = 0, connections = []) => {
  let visited = {};
  let forwardGraph = {};
  let backwardGraph = {};

  for (const connection of connections) {
    const forwardArr = forwardGraph[connection[0]] || [];
    const backwardArr = backwardGraph[connection[1]] || [];

    forwardArr.push(connection[1]);
    backwardArr.push(connection[0]);

    forwardGraph[connection[0]] = forwardArr;
    backwardGraph[connection[1]] = backwardArr;
  }

  console.log(forwardGraph , backwardGraph)
};

const n = 6,
  connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ];

  minReorder(n,connections)