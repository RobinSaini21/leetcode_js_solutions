function isBipartite(graph) {
    const n = graph.length;
    const colors = new Array(n).fill(0); // 0: not colored, 1: colored with group A, -1: colored with group B

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0 && !dfs(i, 1)) {
            return false;
        }
    }

    return true;

    function dfs(node, color) {
        console.log(node,graph[node])
       // console.log(colors,node ,color,colors[node] === color)
        if (colors[node] !== 0) {
            console.log(colors,node ,color,colors[node] === color)
            return colors[node] === color;
        }

        colors[node] = color;

        for (const neighbor of graph[node]) {
           console.log(neighbor,node)
            if (!dfs(neighbor, -color)) {
                return false;
            }
        }

        return true;
    }
}

// Example usage
const graph1 = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];
console.log(isBipartite(graph1)); // Output: false

const graph2 = [[1, 3], [0, 2], [1, 3], [0, 2]];
//console.log(isBipartite(graph2)); // Output: true
