class LinkedList {
    constructor() {
        this.head = null;   // First element of the list 
        this.tail = null;   // Last element of the list
    }

    // append adds to the end of the list so there will be no next and hence it is kept as null
    append(value) {
        const newNode = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newNode;   // tail becomes the second last element 
        }
        this.tail = newNode;  // since we are adding from last newNode is the new tail
        if (!this.head) {
            this.head = newNode;  // special case when newNode is the very first element and list has no head or tail then head becomes the head and tail.
        }
    }
    // Adding elements from head 
    prepend(value) {
        const newNode = { value: value, next: null };
        if (!this.head) {
            this.head = newNode;
        }
        if (!this.tail) {
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    // delete a node from the list or all the nodes matching a value 
    delete(value) {
        if (!this.head) {
            return null;            // because list is empty 
        }
        // to remove head node or if there are multiple nodes starting from head with same value
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        while (this.tail.value === value) {
            this.tail = currentNode;
        }
    }
    // insert after a particular value 
    insertAfter(value, afterValue) {
        const findNode = this.find(afterValue);
        if (findNode) {
            const newNode = { value: value, next: findNode.next };
            findNode.next = newNode;
        }
    }


    // search for an element in the list 
    find(value) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }
    }
    // to print the list as  array 
    toArray() {
        let element = [];
        let currentNode = this.head;
        while (currentNode) {
            element.push(currentNode);
            currentNode = currentNode.next;
        }
        return element;
    }
}

module.exports = LinkedList;

