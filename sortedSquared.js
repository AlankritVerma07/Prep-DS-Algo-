//o(nlogn)T & o(n)S
function sortedSquaredArray(array) {
  // Write your code here.
  const res = [];
  for (let num of array) {
    num = num * num;
    res.push(num);
  }
  res.sort((a, b) => a - b);
  return res;
}

//o(n)T o(n)S
function sortedSquaredArray(array) {
  // Write your code here.
  const sortedSq = new Array(array.length).fill(0);
  let sIdx = 0;
  let lIdx = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[sIdx];
    const largerValue = array[lIdx];
    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSq[i] = smallerValue * smallerValue;
      sIdx++;
    } else {
      sortedSq[i] = largerValue * largerValue;
      lIdx--;
    }
  }
  return sortedSq;
}

//Another way to do it in o(n^2)T &o(n)S
function sortedSquaredArray(array) {
  // Write your code here.
  const res = [];
  const new1 = [];
  let l, s, sq, small, large;
  let arr = array.length;
  // [8,9,-4,2] [8,9,2,-4] [8,9,2] [-4]
  for (let num of array) {
    num = Math.abs(num);
    new1.push(num);
  }
  while (res.length !== arr) {
    s = l = new1[0];
    for (let i = 0; i < new1.length; i++) {
      if (new1[i] > l) l = new1[i];
      if (new1[i] < s) s = new1[i];
      small = s;
      large = l;
    }
    l = Math.abs(l);
    s = Math.abs(s);
    if (l < s) {
      sq = l * l;
      let i = new1.indexOf(large);
      res.push(sq);
      let temp = new1[new1.length - 1];
      new1[new1.length - 1] = large;
      new1[i] = temp;
    } else {
      sq = s * s;
      let i = new1.indexOf(small);
      res.push(sq);
      let temp = new1[new1.length - 1];
      new1[new1.length - 1] = small;
      new1[i] = temp;
    }
    new1.pop();
  }
  return res;
}
