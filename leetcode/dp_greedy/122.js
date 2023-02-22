/**
 * 122. Best Time to Buy and Sell Stock II (Medium)
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let totalProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1]
    }
  }
  return totalProfit
}
