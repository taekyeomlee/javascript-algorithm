/**
 * 11. 팩토리얼
 *
 * 5
 *
 * 120
 */

function solution(n) {
  let answer
  function DFS(n) {
    if (n === 1) return 1
    else return n * DFS(n - 1)
  }
  answer = DFS(n)
  return answer
}

let n = 5
console.log(solution(n))
