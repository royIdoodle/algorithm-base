/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  return n === 1 ? 1 : 2 * (n / 2 + 1 - lastRemaining(n / 2))
};

console.time('s')
// for (let i = 1; i < 1000; i++) {
//   const d = lastRemaining(i);
//   console.log({ n: i, result: d});
// }

const d = lastRemaining(11);
console.log(d);

console.timeEnd('s')