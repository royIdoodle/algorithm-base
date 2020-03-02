/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var list = {}
  if (nums.length === k) {
    return nums
  }
  while (nums.length) {
    var num = nums.pop()
    if (list[num]) {
      list[num]++
    } else {
      list[num] = 1
    }
  }
  
  return Object.keys(list).sort((a, b) => {
    return list[b] - list[a]
  }).slice(0, k).map(n => Number(n))
};

console.log(topKFrequent([1], 1))