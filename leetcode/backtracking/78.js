/**
 * 78. Subsets (Medium)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const result = []

  const backtrack = (cur, start) => {
    if (cur.length > nums.length) {
      return
    }

    result.push([...cur])

    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i])
      backtrack(cur, i + 1)
      cur.pop()
    }
  }

  backtrack([], 0)

  return result
}
