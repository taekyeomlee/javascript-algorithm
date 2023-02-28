/**
 * 322. Coin Change (Medium)
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = Array.from({ length: amount + 1 }, () => Infinity)
  memo[0] = 0

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      memo[i] = Math.min(memo[i], 1 + memo[i - coin])
    }
  }

  return memo[amount] === Infinity ? -1 : memo[amount]
}
