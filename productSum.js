// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
//o(n)--> here n the total no. of every element in our array exp.[3,[3,4],5,[5,6,7]]--->9 o(d)S-->d id depth of array
function productSum(array, depth = 1) {
  // Write your code here.
  let sum = 0;
  for (let i of array) {
    if (Array.isArray(i)) {
      sum += productSum(i, depth + 1);
    } else sum += i;
  }
  return sum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
