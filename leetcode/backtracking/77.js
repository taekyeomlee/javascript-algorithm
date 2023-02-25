/**
 * 77. Combinations (Medium)
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const result = []
  const nums = Array.from({ length: n }, (_, i) => i + 1)

  const backtrack = (cur, start) => {
    if (cur.length === k) {
      result.push([...cur])
      return
    }

    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i])
      backtrack(cur, i + 1)
      cur.pop()
    }
  }

  backtrack([], 0)

  return result
}
