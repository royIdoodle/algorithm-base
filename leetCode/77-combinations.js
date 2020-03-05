/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function(n, k) {
  const result = []
  if (n <= 0 || k <= 0 || n < k) {
    return result;
  }
  findCombinations(n, k, 1, [])
  function findCombinations(n, k, index, list) {
    list = [...list]
    if (list.length === k) {
      result.push(list);
      return;
    }
    for (let i = index; i <= n - (k - list.length) + 1; i++) {
      list.push(i);
      findCombinations(n, k, i + 1, list);
      list.pop();
    }
  }
  
  return result
};


// n = 2 k = 1
console.log(combine(4, 2))

