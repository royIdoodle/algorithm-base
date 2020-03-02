/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 1) {
    return nums[0]
  }
  let sum = nums[0]
  let dp = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp + nums[i], nums[i])
    sum = Math.max(sum, dp)
  }
  return sum;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var result = maxSubArray(nums)
console.log({ result })
