/**
 * 2. 이진수 출력(재귀)
 * 10진수 N (1 <= N <= 10000)
 *
 * 11
 *
 * 1011
 */

function solution(n) {
  let answer = ''

  function DFS(n) {
    if (n === 0) return

    DFS(parseInt(n / 2))
    answer += n % 2
  }

  DFS(n)

  return answer
}

let n = 11
console.log(solution(n)) // 1011
