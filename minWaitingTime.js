function minimumWaitingTime(queries) {
  // Write your code here.(Greedy approach)
  //o(nlogn)T o(1)S
  let left = 0,
    sum = 0;
  queries.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    left = queries.length - 1 - i;
    sum += queries[i] * left;
  }
  return sum;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;

//---------------------------Blow is unoptamized code-------------------------

//o(n^2)T
function minimumWaitingTime(queries) {
  let sum = 0;
  queries.sort((a, b) => a - b);
  for (let i = 1; i < queries.length; i++) {
    for (let j = 0; j < i; j++) {
      sum += queries[j];
    }
  }
  return sum;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
