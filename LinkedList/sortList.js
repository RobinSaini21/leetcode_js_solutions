import { head , Node} from "../DataStructure/LinkedList.js";

const sortList = function (head) {
  let arr = [];
  let current = head;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        if(arr[j] > arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        
    }
    
  }

  let temp = new Node(0)
   let head2 = temp;
  for (const value of arr) {
    let node = new Node(value)
    temp.next = node;

    temp = temp.next
  }
  console.log(head2)
};


sortList(head)