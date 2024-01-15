import { LinkedList,Node } from "../DataStructure/LinkedList.js";

const addTwoNumbers = (l1,l2) =>{
let reminder = 0;
let current1 = l1,current2 = l2
let tail = new Node()
let sentinel =tail ;

while (current1 && current2) {
    console.log(current2.value,current1.value)


let sum = current1?.value + current2?.value + reminder;
if(isNaN(sum)) continue
console.log(sum)
let val = sum % 10;
reminder = Math.floor(sum / 10);

tail.next = new Node(val);
tail = tail.next
current1 = current1.next;
current2 = current2.next
}
console.log(sentinel)
}


const headA = new LinkedList();
headA.add(2);
headA.add(4);
headA.add(3);


const headB = new LinkedList();

headB.add(5);
headB.add(6);
headB.add(4);

addTwoNumbers(headA.head,headB.head)


//l1 = [2,4,3], l2 = [5,6,4]