// o(2^n)T o(n)S--->Recursive Approach
function getNthFib(n) {
  // Write your code here.
  if (n <= 1) return 0;
  if (n === 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

//o(n)T o|(n)S
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) return memoize[n];
  memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
  return memoize[n];
}

//o(n)T o(1)S
function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 2;
  while (counter < n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter += 1;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

function getNthFib(n) {
  // Write your code here.
  let a = 0,
    b = 1,
    c;
  if (n === 0) return 0;
  else if (n === 1) return 0;
  else {
    while (n !== 1) {
      c = a + b;
      b = a;
      a = c;
      n--;
    }
    return c;
  }
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
