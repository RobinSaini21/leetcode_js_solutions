import { root } from "../DataStructure/Tree.js";

const diameterOfBinaryTree = (root) => {
return dfs1(root) + dfs2(root) - 1;
}

const dfs1 = (root) =>{
    if(root === null){
        return 0
    }

    const left = dfs1(root.left);

    return left+1
}

const dfs2 = (root) =>{
    if(root === null){
        return 0
    }

    const right = dfs2(root.right);

    return right+1
}

console.log(diameterOfBinaryTree(root))