// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
/* function capitalize(str) {
  // Capitalize the first letter of the string
  let result = str[0].toUpperCase();

  // In the for loop starts in with the letter with index 1
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
} */
function capitalize(str) {
  const words = [];
  /* 
  For each word in the String, the first letter is UpperCase, the rest of the word is separated and then united again with the uppercase letter and finally push to the array
  */
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}
module.exports = capitalize;
