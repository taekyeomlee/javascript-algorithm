/**
 * 40. Combination Sum II (Medium)
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  const result = []

  candidates.sort((a, b) => a - b)

  const backtrack = (cur, sum, start) => {
    if (sum === target) {
      result.push([...cur])
      return
    }

    if (sum > target) {
      return
    }

    for (let i = start; i < candidates.length; i++) {
      if (i !== start && candidates[i] === candidates[i - 1]) continue

      cur.push(candidates[i])
      backtrack(cur, sum + candidates[i], i + 1)
      cur.pop()
    }
  }

  backtrack([], 0, 0)

  return result
}
