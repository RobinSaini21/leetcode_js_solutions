import { root } from "../DataStructure/Tree.js";

const levelOrder = (root,res = [],idx = 0) =>{
    if(root === null){
        return res
    } 

    if(Array.isArray(res[idx])){
        res[idx].push(root.value);
    } else {
        res[idx] = [];
        res[idx].push(root.value)
    }
    

    levelOrder(root.left,res,idx + 1)
    levelOrder(root.right,res,idx + 1)
    

return res

}

console.log(levelOrder(root))