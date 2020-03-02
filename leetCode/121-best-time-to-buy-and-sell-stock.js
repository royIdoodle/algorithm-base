/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var lowestPrice = prices.shift()
  var maxProfitCount = 0
  while (prices.length) {
    var current = prices.shift()
    lowestPrice = Math.min(lowestPrice, current)
    maxProfitCount = Math.max(current - lowestPrice, maxProfitCount)
  }
  return maxProfitCount
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profitList = []
  while (prices.length) {
    var cur = prices.shift()
    profitList.push(Math.max(...prices) - cur)
  }
  var maxProfit = Math.max(...profitList)
  return maxProfit > 0 ? maxProfit : 0
};


const list = [1,5,2,9,5,3,2,10]
const result = maxProfit(list)
console.log({ result })
