/**
 * 46. Permutations (Medium)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const result = []
  const visited = Array.from({ length: nums.length }, () => false)

  const backtrack = (cur) => {
    if (cur.length === nums.length) {
      result.push([...cur])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue

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
