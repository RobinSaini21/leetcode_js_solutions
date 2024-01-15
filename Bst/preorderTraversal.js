import { root } from "../DataStructure/Tree.js";

const perorderTraversal = (root,values = []) =>{
    if(root === null){
       return root
    }
    values.push(root.value);
    perorderTraversal(root.right,values)
    perorderTraversal(root.left,values);
    return values
   }

   console.log(perorderTraversal(root))