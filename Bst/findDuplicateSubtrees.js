import { Tree } from "../DataStructure/Tree.js";

const findDuplicateSubtrees = (root) => {
  const map = new Map();
  let res = [];
  serialize(root, map);
  for (const [key, value] of map) {
    if (value >= 2) {
      let arr = [];
      for (const s of key) {
        arr.push(parseInt(s));
      }
      res.push(arr);
    }
  }

  console.log(res)
};

const serialize = (root, map = new Map()) => {
  if (!root || !root.val) return "";

  const s = `${serialize(root.left, map)}${root.val}${serialize(
    root.right,
    map
  )}`;
  if (!map.has(s)) {
    map.set(s, 1);
  } else {
    map.set(s, map.get(s) + 1);
  }
  return s;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function buildTreeFromArray(array) {
  if (array.length === 0) return null;

  const root = new TreeNode(array.shift());
  const queue = [root];

  while (queue.length > 0 && array.length) {
    const node = queue.shift();
    const leftVal = array.shift();
    if (leftVal !== null) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }
    const rightVal = array.shift();
    if (rightVal !== null) {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
  }
  return root;
}

const input1 = [1, 2, 3, 4, null, 2, 4, null, null, 4];
const root1 = buildTreeFromArray(input1);
findDuplicateSubtrees(root1);
