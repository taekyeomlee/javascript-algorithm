/**
 * 377. Combination Sum IV (Medium)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = Array.from({ length: target + 1 }, () => 0)
  dp[0] = 1

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i < num) continue
      dp[i] += dp[i - num]
    }
  }

  return dp[target]
}
