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

    size() {        
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {    
        if (!this.head) {
            return null;
        }    

        let node = this.head;

        /* Iterates through the Linked List */
        while (node) {  
            /* If doesn't find a node.next return the last node */          
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        // this.head.next points to the next node "second node"
        this.head = this.head.next;
    }

    /* removeLast() {
        if (!this.head) {
            return;
        }

        // reference to the first node can be also with "this.head.next"
        if (this.size() == 1) {
            this.head = null;
            return;
        }
        // new node points to the first node of the list
        let node = this.head;
        /* node.next.next is the next of the second node,
        it iterates through the List until the last node,
        then it assign the next of the last node to node *//*
        while (node.next.next) {
            node = node.next;            
        }
        // removes the last node
        node.next = null;
    } */
    // Another solution for method removeLast
    removeLast(){
        if (!this.head) {
            return;
        }

        // reference to the first node can be also with "this.head.next"
        if (this.size() == 1) {
            this.head = null;
            return;
        }

        // points to the List
        let previous = this.head;
        // points to the first node
        let node = this.head.next;
        // iterates through the List
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const node = new Node(data, null);
        let lastNode = this.getLast();
        lastNode.next = node;
    }

}


const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
list

// console.log(list.size());
console.log(list.getLast());
module.exports = { Node, LinkedList };
