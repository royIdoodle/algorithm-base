/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let dp = []
  nums.forEach((n, i) => {
    dp[i] = Math.max((dp[i-2] || 0) + n, (dp[i-1] || 0))
  })
  return dp[nums.length - 1]
};

var list = [2,7,9,3,1]
console.log(rob(list))
