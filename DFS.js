// Feel free to add new properties
// and methods to the class.

//o(v+e)T-->e since we had to make a for loop to traverse each child of every vertex v
//o(v)S-->we make v function calls for every v
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
