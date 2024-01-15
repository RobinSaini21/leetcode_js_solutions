import { head, Node } from "../DataStructure/LinkedList.js";

// const swapPairs = (head) =>{
//     let current = head;
//     let prv = null;
//     let k = 1;

// while(current){
// current = (prv || head)
//     while (k) {
//         let next = current?.next;
//         prv = current;
//         current = next;
//         k--;
//     }
//     console.log(current)
//     let next = current?.next
//     prv.next = next;
//    current.next = prv

//    console.log(current)

// }

// console.log(prv)
// }

const swapPairs = (head) => {
    let current = {...head}
  let dummy = new Node(0);
  dummy.next = head;
  let temp = dummy;
  while (temp.next !== null && temp.next.next !== null) {
    let first = temp.next;
    let second = temp.next.next;
    temp.next = second;
     first.next = second.next;
     second.next = first;
     temp = first
  
};

console.log(dummy.next)
}
swapPairs(head);
