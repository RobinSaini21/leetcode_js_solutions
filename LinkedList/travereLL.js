import { head } from "../DataStructure/LinkedList.js";

const travereLL = (head) => {
  let current = head;
  while (current.next) {
    console.log(current.value);
    current = current.next;
  }
};


travereLL(head);
