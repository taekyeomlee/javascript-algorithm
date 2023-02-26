/**
 * 90. Subsets II (Medium)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []

  const backtrack = (cur, start) => {
    if (cur.length > nums.length) {
      return
    }

    result.push([...cur])

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue

      cur.push(nums[i])
      backtrack(cur, i + 1)
      cur.pop()
    }
  }

  backtrack([], 0)

  return result
}
