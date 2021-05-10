//o(n)T o(1)S
function isValidSubsequence(array, sequence) {
  // Write your code here.
  const result = [];
  let p2 = 0;
  for (let p1 = 0; p1 < array.length; p1++) {
    if (array[p1] === sequence[p2]) {
      result.push(array[p1]);
      p2++;
    }
  }
  return result.toString() === sequence.toString();
}

//o(n)T o(1)S
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

//Another way we can compare strings instead of length
//o(n)T o(1)S

function isValidSubsequence(array, sequence) {
  // Write your code here.
  const result = [];
  let p2 = 0;
  for (let p1 = 0; p1 < array.length; p1++) {
    if (array[p1] === sequence[p2]) {
      result.push(array[p1]);
      p2++;
    }
  }
  if (JSON.stringify(result) == JSON.stringify(sequence)) return true;
  else return false;
}
