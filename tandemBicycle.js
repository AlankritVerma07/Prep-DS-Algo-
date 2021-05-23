//o(nlogn)T o(1)S
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  let sum = 0;
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => a - b);
  if (fastest === true) {
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      if (redShirtSpeeds[i] > blueShirtSpeeds[i]) sum = sum + redShirtSpeeds[i];
      else sum = sum + blueShirtSpeeds[i];
    }
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      if (redShirtSpeeds[i] > blueShirtSpeeds[i]) sum = sum + redShirtSpeeds[i];
      else sum = sum + blueShirtSpeeds[i];
    }
  }
  return sum;
}

//---------------Another way to do it-----------------------------------

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  let sum = 0;
  if (!fastest) reverse(redShirtSpeeds);
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let rider1 = redShirtSpeeds[i];
    let rider2 = blueShirtSpeeds[redShirtSpeeds.length - 1 - i];
    sum += Math.max(rider1, rider2);
  }
  return sum;
}
function reverse(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}
// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
