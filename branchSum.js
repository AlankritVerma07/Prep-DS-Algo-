// This is the class of the input root.
// Do not edit it.
//o(n)T O(n)S-->(FOR SPACE: leaf nodes are roughly half of the no. of nodes in tree therefore o(n/2)-->o(n) eventually )
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let sum = 0;
  const arr = [];
  return branchSumHelper(root, sum, arr);
}
function branchSumHelper(root, sum, arr) {
  let curr = root;
  while (curr !== null) {
    sum = sum + curr.value;
    branchSumHelper(curr.left, sum, arr);
    branchSumHelper(curr.right, sum, arr);
    if (curr.left === null && curr.right === null) arr.push(sum);
    return arr;
  }
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
