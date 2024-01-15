import { head } from "../DataStructure/LinkedList.js";

const reverseLinkedList = (head) => {
  let current = head,
    previous = null,
    next = null;
  while (current != null) {
   // console.log(current)
    next = current.next;
    current.next = previous;
    previous = current
    current = next
  }
  console.log(previous)
};


reverseLinkedList(head)