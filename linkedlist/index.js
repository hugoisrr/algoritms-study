// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // arguments passed are data; value store inside the Node, and next will store the location of the first node
        const node = new Node(data, this.head);
        // update the link to the new node
        this.head = node;
    }

    size () {        
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
list

console.log(list.size());
module.exports = { Node, LinkedList };
