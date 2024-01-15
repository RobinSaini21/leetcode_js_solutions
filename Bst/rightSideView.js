import { root } from "../DataStructure/Tree.js";

const rightSideView = (root, res = []) => {
  if (root === null) {
    return res;
  }

  res.push(root.value);
  return rightSideView(root.right, res);


};

console.log(rightSideView(root))
