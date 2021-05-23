//o(logn)T o(logn)S-->since memory frames for every recursive call
//o(n)TS-->worst
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueBstHelper(tree, target, Number.MAX_VALUE);
}

function findClosestValueBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) closest = tree.value;
  if (tree.value < target) return findClosestValueBstHelper(tree.right, target, closest);
  else if (tree.value > target)
    return findClosestValueBstHelper(tree.left, target, closest);
  else return closest; //when both target & closest are same
}

//----------------------Iteartive Approach---------------------------

//o(logn)T o(1)S-->Avg
//o(n)T o(1)S-->S-->Worst using iterative approach
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueBstHelper(tree, target, Number.MAX_VALUE);
}
function findClosestValueBstHelper(tree, target, closest) {
  while (tree != null) {
    if (Math.abs(target - tree.value) < Math.abs(target - closest)) closest = tree.value;
    if (tree.value < target) tree = tree.right;
    else if (tree.value > target) tree = tree.left;
    else break;
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
