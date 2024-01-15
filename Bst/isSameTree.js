import { root } from "../DataStructure/Tree.js";

const isSameTree = (root1, root2) => {
  return dfs(root1, root2);
};

const dfs = (root1, root2) => {
    const isEqual = root1.value === root2.value;
  if (root1 === null && root2 === null) {
    return true;
  } 
  if(isEqual){
    return true;
  } 
  if(!isEqual) return false;

  let left = dfs(root1.left,root2.left);
  let right = dfs(root1.right,root2.right)


  return left && right
};


console.log(isSameTree(root,root))