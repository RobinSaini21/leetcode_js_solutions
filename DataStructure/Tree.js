export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return null;
    }
    this.insertNode(this.root, node);
  }
  insertNode(root, node) {
    //  console.log(root,node)
    if (root === null) {
      root = node;
    }
    if (root.value > node.value) {
//console.log(node);
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    }
    if (root.value < node.value) {
//console.log(node);
        if (root.right === null) {
          root.right = node;
        } else {
          this.insertNode(root.right, node);
        }
      }
  }
  findMinNode(root = this.root){
    //console.log(root)
    if(root.left === null){
        return root
    } else {
        return this.findMinNode(root.left)
    }
  }

  

}

let tree = new Tree();
//const root_ = [4,2,7,1,3];
const root_ = [3,1,4,3,1,5]
for (const val of root_) {
  tree.insert(val)
}


export let root =  tree.root;
