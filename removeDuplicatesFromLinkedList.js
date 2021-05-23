//o(n)T o(1)S
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let current = linkedList;
  while (current !== null) {
    let nextDistinctNode = current.next;
    while (nextDistinctNode !== null && nextDistinctNode.value === current.value) {
      nextDistinctNode = nextDistinctNode.next;
    }
    current.next = nextDistinctNode;
    current = nextDistinctNode;
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
