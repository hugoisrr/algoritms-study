// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
// === true
console.log("Test abba: " + palindrome("abba"));
console.log("Test abcdefg: " + palindrome("abcdefg")); // === false
/* 
3rd Solution
This approach is more direct using every()
The every() method tests whether all elements in the array pass the test implemented by the provided function.
*/
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
/* 
2nd Solution
This a much direct approach, using JavaScript functions
*/
/* function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");

  return str === reversed;
} */
/* 
1st Solution

with a for loop we first reverse the string given,
the we compare if the reversed string is equal to the 
original string.
*/
/* function palindrome(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  if (reversed === str) return true;
  else return false;
} */

module.exports = palindrome;
