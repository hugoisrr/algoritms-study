// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
steps(3);
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
/* 
Recursion Tips
 * Figure out the bare minimum pieces of information to represetn your problem
 * Give reasonable defaults to the bare minimum pieces of info
 * Check the base case. Is there any work left to do? If not, return
 * Do some work. Call your function again, making sure the arguments have changed in some fashion
*/
function steps(n, row = 0, stair = "") {
  // if (row === n) then we have hit the end of our problem
  if (n === row) {
    return;
  }

  // if the 'stair' string has a length === n then we are at the end of a row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  /* if the length of the stair string is less than or equal to the row number
    we're working on, we add a '#', otherwise add a space*/
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}
/* function steps(n) {
  // From 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // Create an empty string, 'stair'
    let stair = "";

    // From 0 to n (iterate through columns)
    for (let column = 0; column < n; column++) {
      // if the current column is equal to or less than the current row
      if (column <= row) {
        // add a '#' to stair
        stair += "#";
      } else {
        // add a space to 'stair'
        stair += " ";
      }
    }
    // console log 'stair'
    console.log(stair);
  }
} */

module.exports = steps;
