import { root } from "../DataStructure/Tree.js";

const goodNodes = (root,goodnode = 0 ,count = 1) => {
    console.log(count)
    if(root === null){
        return count
    }

    if(root?.value > goodnode){
        count++
        goodNodes(root.left,root.value,count);
        goodNodes(root.right,root.value,count);
    } else {
        goodNodes(root.left,goodNodes,count);
        goodNodes(root.right,goodNodes,count); 
    }

    return count
};

console.log(goodNodes(root))
