export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

 export class LinkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }

  add(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return null;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
  addAt(value, index) {
    let current = this.head;
    let previous = null;
    while (index) {
      previous = current;
      current = current.next;
      index--;
    }

    let node = new Node(value);
    node.next = current;
    previous.next = node;
  }
  remove() {
    if (this.head === null) {
      console.log("NOTHING TO REMOVE");
      return null;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }
  removeFrom(index) {
    if (this.head === null) {
      console.log("NOTHING TO REMOVE");
      return null;
    }
    let current = this.head;
    let previous = null;
    while (index) {
      previous = current;
      current = current.next;
      index--;
    }

    previous.next = current.next;
  }

}

const LL = new LinkedList();
// const arr = [1,4,3,2,5,2];
const arr = [1,2,3,4,5];

for (const v of arr) {
  LL.add(v);
}


export const head = LL.head

