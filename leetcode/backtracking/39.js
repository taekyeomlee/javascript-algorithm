/**
 * 39. Combination Sum (Medium)
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const result = []

  const backtrack = (cur, sum, start) => {
    if (sum === target) {
      result.push([...cur])
      return
    }

    if (sum > target) {
      return
    }

    for (let i = start; i < candidates.length; i++) {
      cur.push(candidates[i])
      backtrack(cur, sum + candidates[i], i)
      cur.pop()
    }
  }

  backtrack([], 0, 0)

  return result
}
