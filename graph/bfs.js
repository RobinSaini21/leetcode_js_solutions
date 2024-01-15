const bfs_ =(prerequisites) =>{
    let hashMap = {};
    for (let i = 0; i < prerequisites.length; i++) {
      if (hashMap[prerequisites[i][0]]) {
        hashMap[prerequisites[i][0]].push(prerequisites[i][1]);
      } else {
        let arr = [];
        arr.push(prerequisites[i][1]);
        hashMap[prerequisites[i][0]] = arr;
      }
    }
return bfs(hashMap)    
}

const bfs =(graph) =>{
  console.log(graph)
const start = Object.keys(graph)[0]
let que = [] , result = [] , mark = [];

que.push(start)

while (que.length > 0) {
let adj = parseInt(que.shift());

if(!mark[adj]){
  result.push(adj)
  mark[adj] = true
}
//if(mark[adj]) continue;

const edges = graph[adj] || []
  for (const _adj of edges) {
    if(mark[_adj]) continue;

    que.push(_adj)
  }
}
console.log(result)
}


const p = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [3, 4],
];

bfs_(p)