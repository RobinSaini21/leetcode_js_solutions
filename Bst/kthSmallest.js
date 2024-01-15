import { Tree } from "../DataStructure/Tree.js";

const kthSmallest = (root,k,inOder = []) => {
    if(!root) return inOder;

    return dfs(root,k,inOder)
}

const dfs = (root,k,inOder) =>{
if(root.left) kthSmallest(root.left,k,inOder);
inOder.push(root.value)
if(root.right) kthSmallest(root.right,k,inOder);

return inOder[k-1]
}


const tree = new Tree();
const root_ = [5,3,6,2,4,1], k = 3;

for (const r of root_) {
   tree.insert(r); 
}

console.log(
    kthSmallest(tree.root,k))

