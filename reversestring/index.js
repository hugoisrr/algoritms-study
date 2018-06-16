// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Second solution
/* 
  Explanition:
  declares a temporal variable "reverse", which will
  return the reversed string.
  On the for loop it takes the first character from the str
  and adds it to the temporal vriable reversed.
  Important:
  In order to return a reverse string the character has to be added first then the reverse. Otherwise, will return the same string.
  Returns reversed string
  reversed = character + reversed;
  Returns same string
  reversed = reversed + character;
 */
function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
    // debugger; // to debug using "node inspect"
  }

  return reversed;
}

module.exports = reverse;

// First solution
/* function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
} */

/* 
Explanation:
Using reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
Example using reduce():
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
*/
/* function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
} */
