import { head } from "../DataStructure/LinkedList.js";

const reorderLinkedList = (head) => {
  let fast = getTheMid(head);

  return reorder(head, fast);
};

const getTheMid = (head) => {
  let fast = { ...head };
  let slow = { ...head };

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reorder = (head, fast) => {
  let current1 = head,
    current2 = fast,
    next1 = null,
    next2 = null;
  while (current2?.next) {
    next1 = current1.next;
    current1.next = current2;
    current1 = next1;

    next2 = current2.next;
    current2.next = current1;
    current2 = next2;
  }

  console.log(head);
};

reorderLinkedList(head);
