// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
console.log(fib(4)); //=== 3

/* 
Time complexity: O(2N)
Space complexity: O(n)
Memoization - Is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calss.
*/
function fib(n, memo) {
  memo = memo || {};
  debugger;
  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}
/* function fib(n) {
  var a = 1,
    b = 0,
    temp;

  // Time complexity O(N) Space complexity: Constant
  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
} */
/* function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
} */

module.exports = fib;
