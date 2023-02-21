/**
 * 12. 조합수(메모이제이션)
 *
 * 5 3
 *
 * 10
 */

function solution(n, r) {
  let answer
  // 메모이제이션
  // 행 5, 열 3
  //   0 1 2 (3)
  // 0
  // 1
  // 2
  // 3
  // 4
  // (5)
  let dy = Array.from(Array(n + 1), () => Array(r + 1).fill(0))
  function DFS(n, r) {
    // 메모이제이션
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    // 메모이제이션
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
  }
  answer = DFS(n, r)
  return answer
}

let n = 5
let r = 3
console.log(solution(n, r))

n = 33
r = 19
console.log(solution(n, r)) // 818809200

// 5 C 3
// 4 C 2 + 4 C 3
// 3 C 1 + 3 C 2
// 2 C 0 + 2 C 1
// 1 + 1 C 0 + 1 C 1
// 1 + 1 + 1
