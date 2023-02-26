/**
 * 47. Permutations II (Medium)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []
  const visited = Array.from({ length: nums.length }, () => false)

  const backtrack = (cur) => {
    if (cur.length === nums.length) {
      result.push([...cur])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) continue

      cur.push(nums[i])
      visited[i] = true
      backtrack(cur)
      visited[i] = false
      cur.pop()
    }
  }

  backtrack([])

  return result
}
