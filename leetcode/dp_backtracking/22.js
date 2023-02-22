/**
 * 22. Generate Parentheses (Medium)
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = []
  function dfs(lt, rt, str) {
    if (str.length === n * 2) {
      answer.push(str)
      return
    }
    if (lt < n) {
      dfs(lt + 1, rt, str + '(')
    }
    if (lt > rt) {
      dfs(lt, rt + 1, str + ')')
    }
  }
  dfs(0, 0, '')
  return answer
}
