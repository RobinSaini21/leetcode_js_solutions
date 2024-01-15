import { root } from "../DataStructure/Tree.js";

const invertTree = (root) =>{

    return dfs(root)
}

const dfs = (root) =>{
    if(root === null){
        return root;
    }
    let left = dfs(root.left);
    let right = dfs(root.right)

    root.left = right;
    root.right = left;

    return root
}

console.log("Roo",root)
console.log(invertTree(root))

