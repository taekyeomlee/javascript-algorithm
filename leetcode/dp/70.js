/**
 * 70. Climbing Stairs (Easy)
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1]
  }

  return memo[n]
}
