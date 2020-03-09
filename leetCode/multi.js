/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
  if (B === 1) {
    return A
  }
  if (B === 0 || A === 0) {
    return 0
  }
  return A + multiply(A, B - 1)
};

console.log(multiply(0, 10))
