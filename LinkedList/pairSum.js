import { head } from "../DataStructure/LinkedList.js";

const pairSum = (head) => {
  let arr = [],
    current = head,
    max = Number.MIN_SAFE_INTEGER,
    n = 0;
  while (current) {
    arr.push(current.value);
    current = current.next;
    ++n;
  }

  for (let i = 0; i <= n / 2; i++) {
    max = Math.max(max, arr[i] + arr[n - i - 1]);
  }
  console.log(max);
};

pairSum(head);
