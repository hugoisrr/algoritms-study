// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
console.log(anagrams("RAIL! SAFETY!", "fairy tales")); // --> True
// console.log(anagrams("Hi there", "Bye there")); // --> False
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
// Helper function to clean String
function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
/* function anagrams(stringA, stringB) {
  const mapA = buildCharMap(stringA);
  const mapB = buildCharMap(stringB);

  // Compares the number of keys on each map
  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }

  return true;
} */
/* Helper function to build char Map from a String */
/* function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
} */
/* function anagrams(stringA, stringB) {
  const modiA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const modiB = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (modiA.length != modiB.length) {
    return false;
  } else {
    const mapA = {};
    const mapB = {};

    for (let char of modiA) {
      if (mapA[char]) {
        mapA[char]++;
      } else {
        mapA[char] = 1;
      }
    }

    for (let char of modiB) {
      if (mapB[char]) {
        mapB[char]++;
      } else {
        mapB[char] = 1;
      }
    }

    for (let char in mapA) {
      debugger;
      if (mapA[char] !== mapB[char]) {
        return false;
      }
    }

    return true;
  }
} */

module.exports = anagrams;
