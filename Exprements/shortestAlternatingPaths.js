function shortestAlternatingPaths(n, redEdges, blueEdges) {
    const graph = new Array(n).fill().map(() => ({
        red: [],
        blue: []
    }));
    
    // Build the graph
    for (const [u, v] of redEdges) {
        graph[u].red.push(v);
    }
    
    for (const [u, v] of blueEdges) {
        graph[u].blue.push(v);
    }
    console.log(graph)
    const answer = new Array(n).fill(-1);
    const visited = new Set();
    const queue = [{ node: 0, color: 'red', distance: 0 }, { node: 0, color: 'blue', distance: 0 }];
    
    while (queue.length > 0) {
        const { node, color, distance } = queue.shift();
        visited.add(`${node}-${color}`);
        answer[node] = answer[node] === -1 ? distance : Math.min(answer[node], distance);
        
        const nextColor = color === 'red' ? 'blue' : 'red';
        
        for (const neighbor of graph[node][nextColor]) {
            if (!visited.has(`${neighbor}-${nextColor}`)) {
                queue.push({ node: neighbor, color: nextColor, distance: distance + 1 });
            }
        }
    }
    
    return answer;
}

// Example usage:
// const n1 = 3;
// const redEdges1 = [[0, 1], [1, 2]];
// const blueEdges1 = [];
const n = 10;
const redEdges = [[0, 1], [1, 2], [2, 3], [3, 4]];
const blueEdges = [[0, 5], [5, 6], [6, 7]];

console.log(shortestAlternatingPaths(n, redEdges, blueEdges)); // Output: [0, 1, -1]

// const n2 = 3;
// const redEdges2 = [[0, 1]];
// const blueEdges2 = [[2, 1]];
// console.log(shortestAlternatingPaths(n2, redEdges2, blueEdges2)); // Output: [0, 1, -1]
