//o(nlogn)T & o(1)S
function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  let change = 0;
  for (let num of coins) {
    if (num > change + 1) return change + 1;
    change = change + num;
  }
  return change + 1;
}

// The coins have to be in continuation.Just that😎
