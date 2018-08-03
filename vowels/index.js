// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // match() retrieves the matches when matching a string against a regular expression.
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
/* function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (const char of str.toLowerCase()) {
    // using includes() method
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
} */
/* function vowels(str) {
  let cont = 0;
  for (let index = 0; index < str.length; index++) {
    // using test() method
    if (/^[aeiou]$/i.test(str[index].toLowerCase())) {
      cont++;
    }
  }
  return cont;
} */

module.exports = vowels;
