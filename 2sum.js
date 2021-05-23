//----------Sol 1-----------------
//o(n^2)T o(1)S
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let sum = 0;
      sum = array[i] + array[j];
      if (i != j && sum === targetSum) {
        result.push(array[i], array[j]);
        return result;
      }
    }
  }
  return result;
}

//----------Sol 2-----------------
//o(n)T o(n)S
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const nums = {};
  for (const num of array) {
    const pm = targetSum - num;
    if (pm in nums) {
      return [num, pm];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

//----------Sol 3-----------------
//o(nlogn)T o(1)S
function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  left = 0;
  right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === targetSum) return [array[left], array[right]];
    if (sum < targetSum) left = left + 1;
    else right = right - 1;
  }
  return [];
}
