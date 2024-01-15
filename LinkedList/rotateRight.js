import { head } from "../DataStructure/LinkedList.js";

const rotateRight = (head, rotation) => {
  let length = 0;
  let current = head;
  let current1 = head;
  let previous = null;
  let res = head;
  while (current) {
    current = current.next;
    length++;
  }
  let rotatedNodes = Math.abs(rotation - length);

  while (rotatedNodes) {
   let next = current1.next;
   previous = current1;
   current1 = next
    rotatedNodes--;
  }
  current1.next.next = res;

  console.log(current1)
};

rotateRight(head, 2);
