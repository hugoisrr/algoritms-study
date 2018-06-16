// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
reverse("hola");

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
    console.log(character);
    reversed = reversed + character;
    console.log("Charac: " + character + " Rever: " + reversed);
  }

  return reversed;
}

module.exports = reverse;

/* function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
} */
