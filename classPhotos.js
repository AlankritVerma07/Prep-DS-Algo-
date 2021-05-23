//o(n)T o(1)S
function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  let backRow, frontRow;
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  if (
    redShirtHeights[redShirtHeights.length - 1] >
    blueShirtHeights[blueShirtHeights.length - 1]
  ) {
    backRow = redShirtHeights;
    frontRow = blueShirtHeights;
  } else if (
    redShirtHeights[redShirtHeights.length - 1] <
    blueShirtHeights[blueShirtHeights.length - 1]
  ) {
    backRow = blueShirtHeights;
    frontRow = redShirtHeights;
  } else return false; //-->Last values are same

  for (let i = 0; i < backRow.length; i++) {
    if (backRow[i] <= frontRow[i]) return false;
  }
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
