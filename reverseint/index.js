// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
console.log(reverseInt(-6789));
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
/* 
2nd Solution

This approach is more direct
*/
function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}
/* 
1st Solution

This approach extends more using if statements
*/
/* function reverseInt(n) {
  let signInt = Math.sign(n);
  let reversedInt = 0;

  if (signInt == 1) {
    return (reversedInt = parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    ));
  } else if (signInt == -1) {
    return (reversedInt = -Math.abs(
      parseInt(
        n
          .toString()
          .split("")
          .reverse()
          .join("")
      )
    ));
  } else {
    return 0;
  }
} */

module.exports = reverseInt;
