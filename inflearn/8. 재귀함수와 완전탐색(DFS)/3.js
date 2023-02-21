/**
 * 3. 이진트리순회(DFS: 깊이우선탐색)
 *
 * 전위순회 부 -> 왼 -> 오
 * 중위순회 왼 -> 부 -> 오
 * 후위순회 왼 -> 오 -> 부
 */

function solution(v) {
  let answer = ''
  function DFS(v) {
    if (v > 7) return
    else {
      DFS(v * 2)
      DFS(v * 2 + 1)
    }
  }
  DFS(v)
  return answer
}

console.log(solution(1))

// vertex
