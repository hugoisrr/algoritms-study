// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
console.log(maxChar("abcccccccd")); // === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}; // creates an Map Object
  // help variables to iterate through the character map
  let max = 0;
  let maxChar = "";

  /* For loop creates a Map Object such as
    "Hello"
    {
      H: 1,
      e: 1,
      l: 2,
      o: 1
    }
  */
  for (let char of str) {
    // this for loop places each letter of the string as keys, values are added in next lines
    if (charMap[char]) {
      // if charMap[char] is NOT undefined, then it will increment by 1
      charMap[char]++;
    } else {
      // if charMap[char] is undefined, then 1 is added
      charMap[char] = 1;
    }
  }

  /* 
  for loop to iterate the character map
  In this for loop we use "in" instead of "of",
  since it's an Object.
  */

  for (let char in charMap) {
    if (charMap[char] > max) {
      // if the value of the letter is bigger then it does the following
      max = charMap[char]; // max takes the value of charMap[char]
      maxChar = char; // maxChar takes the letter of the current iteration
    }
  }

  return maxChar;
}

module.exports = maxChar;
