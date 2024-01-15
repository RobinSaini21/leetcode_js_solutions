import { root } from "../DataStructure/Tree.js"

const inorderTraversal = (root,values = []) =>{
 if(root === null){
    return root
 }
 inorderTraversal(root.left,values);
 values.push(root.value);
 inorderTraversal(root.right,values)

 return values
}

//console.log(
   // inorderTraversal(root))
   console.log(root)
