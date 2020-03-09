/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
  // 自底向上的动态规划
  if(coins.length === 0){
    return -1;
  }
  
  // memo[n]的值： 表示的凑成总金额为n所需的最少的硬币个数
  let memo = Array.from({ length: amount+1 });
  memo[0] = 0;
  for(let i = 1; i <= amount; i++){
    let min = Number.MAX_VALUE;
    for(let j = 0; j < coins.length; j++){
      if(i - coins[j] >= 0 && memo[i-coins[j]] < min){
        min = memo[i-coins[j]] + 1;
      }
    }
    // memo[i] = (min == Integer.MAX_VALUE ? Integer.MAX_VALUE : min);
    memo[i] = min;
  }
  
  return memo[amount] === Number.MAX_VALUE ? -1 : memo[amount];
};

console.log(coinChange([186,419,83,408], 6249))

