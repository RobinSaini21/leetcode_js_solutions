import { Node, root } from "../DataStructure/Tree.js";

const insertNode = (root,node) =>{
    if(root.value < node.value){
        if(root.right === null){
            root.right = node;
        } else {
          return insertNode(root.right,node)
        }
    }

    if(root.value > node.value){
        if(root.left === null){
            root.left = node;
        } else {
           return insertNode(root.left,node)
        }
    }

    return root
}

const node = new Node(5)
insertNode(root,node)

console.log(root)