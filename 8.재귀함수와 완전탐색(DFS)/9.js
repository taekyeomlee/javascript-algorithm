/**
 * 9. 동전교환(DFS-Cut Edge Tech)
 *
 * 1 2 5
 * 15
 *
 * 3 <= (5, 5, 5)
 */

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER
  let n = arr.length
  function DFS(L, sum) {
    if (sum > m) return
    // Cut Edge Tech
    if (L >= answer) return
    if (sum === m) {
      answer = Math.min(answer, L)
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i])
      }
    }
  }
  DFS(0, 0)
  return answer
}

let m = 15
let arr = [1, 2, 5]
console.log(solution(m, arr))
