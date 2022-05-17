class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head);
        // newNode.next = this.head;

        this.head = newNode;
        this.length++;
    }

    getNodeAt(index) {
        if (index < 0 || index > this.length)
            return null;

        let count = 0;
        var node = this.head;
        while (count++ < index) {
            node = node.node;
        }
        return node;
    }

    insertAtlast(data) {
        const newNode = new LinkedListNode(data);
        var node = this.head;
        while (node.node) {
            node = node.node;
        }
        node.node = newNode;
        this.length++;
    }



    insertAtIndex(data, index) {
        const newNode = new LinkedListNode(data);
        var node = this.head;

        let count = 0;
        while (index > count++) {
            node = node.node;
        }
        newNode.node = node.node;
        node.node = newNode;
        this.length++;
    }
}

class LinkedListNode {
    constructor(value, node) {
        this.value = value;
        this.node = node;
    }
}

LinkedList.fromValues = function (...array) {
    const ll = new LinkedList();
    array.reverse();
    array.forEach(val => {
        ll.insertAtHead(val);
    })
    return ll;
}

module.exports = LinkedList;