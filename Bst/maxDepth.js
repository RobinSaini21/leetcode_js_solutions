import { root } from "../DataStructure/Tree.js";

const maxDepth = (root) => {
return dfs(root);
}

const dfs = (root) =>{
   if(!root) return 0;

   const left = dfs(root.left);
   const right = dfs(root.right);

   return Math.max(left+1,right+1)

}


console.log(maxDepth(root))