/**
 * 4. 부분집합 구하기(이진트리 DFS)
 *
 * 3
 *
 * 1 2 3
 * 1 2
 * 1 3
 * 1
 * 2 3
 * 2
 * 3
 */

function solution(n) {
  let answer = []
  let ch = Array.from({ length: n + 1 }, () => 0)
  function DFS(v) {
    if (v === n + 1) {
      let tmp = ''
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' '
      }
      if (tmp.length > 0) answer.push(tmp.trim())
    } else {
      ch[v] = 1
      DFS(v + 1)
      ch[v] = 0
      DFS(v + 1)
    }
  }
  DFS(1)
  return answer
}

let n = 3
console.log(solution(3))
