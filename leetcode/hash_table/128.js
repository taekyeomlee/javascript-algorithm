/**
 * 128. Longest Consecutive Sequence (Medium)
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums)
  let max = 0

  for (const num of nums) {
    if (set.has(num - 1)) continue

    let currNum = num
    let currMax = 1

    while (set.has(currNum + 1)) {
      currNum++
      currMax++
    }

    max = Math.max(max, currMax)
  }

  return max
}
