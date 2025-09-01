function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data);

    if (head === null) {
        return newNode;
    }

    let current = head;
    while (current.next !== null) {
        current = current.next;
    }

    current.next = newNode;

    return head;
}
