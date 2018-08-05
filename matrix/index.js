// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
console.log(matrix(7));
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function matrix(n) {
  const results = []; // empty array

  for (let i = 0; i < n; i++) {
    results.push([]); // push n num of arrays into the array
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // End Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}
/* function matrix(n) {
  const total = n * n;
  const result = [];

  // creates an empty array of arrays
  for (let i = 0; i < n; i++) {
    var rs = [];
    for (let j = 0; j < n; j++) {
      rs.push(0);
    }
    result.push(rs);
  }

  let x = 0;
  let y = 0;
  var step = 0;
  for (let i = 0; i < total; ) {
    while (y + step < n) {
      i++;
      result[x][y] = i;
      y++;
    }
    y--;
    x++;

    while (x + step < n) {
      i++;
      result[x][y] = i;
      x++;
    }
    x--;
    y--;

    while (y >= step) {
      i++;
      result[x][y] = i;
      y--;
    }
    y++;
    x--;
    step++;

    while (x >= step) {
      i++;
      result[x][y] = i;
      x--;
    }
    x++;
    y++;
  }

  return result;
} */

module.exports = matrix;
