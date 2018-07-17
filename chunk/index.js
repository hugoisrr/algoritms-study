// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* function chunk(array, size) {
  const chunked = []; // Create empty array to hold chunks called 'chunked'

  for (let element of array) {
    // For each element in the "unchunked" array
    const last = chunked[chunked.length - 1]; // Retrieve the last element in "chunked"
    if (!last || last.length === size) {
      // if last element does not exist, or if its length is equal to chunk size.
      console.log(last);
      chunked.push([element]); // Push a new chunk into "chunked" with the current element
    } else {
      last.push(element); // add the current element into the chunk
    }
  }
  return chunked;
} */

/* 
    push() adds one or more elements to the end of an array and return the new length of the array.
  slice()  return a new array object slected from begin to end 
  */
function chunk(array, size) {
  const chunks = [];
  var length = Math.ceil(array.length / size); // Determine number of arrays inside chunks

  for (let i = 0; i < length; i++) {
    chunks.push(array.slice(i * size, (i + 1) * size)); // using slice() will copy values from array from i * size until (i + 1) * size
  }
  return chunks;
}

module.exports = chunk;
