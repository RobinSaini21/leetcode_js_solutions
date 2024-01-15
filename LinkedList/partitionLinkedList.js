
import { head, Node } from "../DataStructure/LinkedList.js";

const partitionLinkedList = (head,x) =>{
    let current = head;
    let head1 = new Node(0);
    let current1 = head1
    let head2 = new Node(0);
    let current2 = head2;

    while (current) {
       // console.log(current.value)
        if(current.value < x){
            console.log(current.value)
            current1.next = new Node(current.value)
            current1 = current1.next
        } else {
            current2.next = new Node(current.value);
            current2 = current2.next
        }

        current = current.next;
    }
current1.next = head2.next
    console.log(head1.next)
}

partitionLinkedList(head,3)