/**
 * 300. Longest Increasing Subsequence (Medium)
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = Array.from({ length: nums.length }, () => 1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

/**
 * Lower Bound
 */
function lengthOfLIS(nums) {
  const n = nums.length
  const dp = []

  for (let i = 0; i < n; i++) {
    const idx = binarySearch(dp, nums[i])
    if (idx === dp.length) {
      dp.push(nums[i])
    } else {
      dp[idx] = nums[i]
    }
  }

  return dp.length
}

function binarySearch(arr, target) {
  let left = 0
  let right = arr.length

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}
