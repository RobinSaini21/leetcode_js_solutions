import { head } from "../DataStructure/LinkedList.js";

const removeNthFromEnd = (head,k) =>{
const totalNodes = getTotalNodes(head);
const current = removeNode( head,totalNodes-k)
console.log(current)
}

const removeNode = (head,k) =>{
    let current = head,previous = null,next =null;
    while(k){
      current = current.next;
      k--;
    }

    current.next = current.next.next;

    return head
}


const getTotalNodes = (head) =>{
    let current = {...head};
    let count = 1;
    while(current.next){
      current =  current.next;
      ++count;
    }

    return count;
}


removeNthFromEnd(head,2)