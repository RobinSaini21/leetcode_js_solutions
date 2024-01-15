import { LinkedList } from "../DataStructure/LinkedList.js";
import { Node } from "../DataStructure/LinkedList.js";

const getIntersectionNode = (headA, headB) => {
  const [headAlength, headBlength] = getHeadLengths([headA, headB]);
  let isHeadBGreater = headAlength < headBlength;
  let headObj = {};
  if (isHeadBGreater) {
    headObj = { nodes: headBlength - headAlength, head1: headA,head2:headB };
  } else {
    headObj = { nodes: headAlength - headBlength, head1: headB ,head2: headA};
  }
  return addNode(headObj);
 // let interSectedPoint = getIntersectedPoint(newHead, isHeadBGreater ? headB : headA);
};

const getHeadLengths = (heads) => {
  const linkedListLengths = [];
  for (const head of heads) {
    let current = head,
      count = 0;

    while (current) {
      ++count;
      current = current.next;
    }
    linkedListLengths.push(count);
  }

  return linkedListLengths;
};

const addNode = (arg) => {
  let nodeTo = arg.nodes,
    current1 = arg.head1,
    current2 = arg.head2,
    res = [];

  while (nodeTo) {
    current2 = current2.next;
    nodeTo--;
  }
  
  while (current1 && current2) {
    current1 = current1.next;
    current2 = current2.next;

    if(current1?.value === 1 && current2?.value === 1) continue;

    res.push(current1?.value)
  }
  
  return res[0]
};





const headA = new LinkedList();
headA.add(4);
headA.add(1);
headA.add(8);
headA.add(4);
headA.add(5);

const headB = new LinkedList();

headB.add(5);
headB.add(6);
headB.add(1);
headB.add(8);
headB.add(4);
headB.add(5);

console.log(getIntersectionNode(headA.head, headB.head))
