/**
 * 6. 바둑이 승차(이진트리 DFS)
 *
 * 259 5
 * 81
 * 58
 * 42
 * 33
 * 61
 *
 * 242
 */

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = arr.length
  function DFS(L, sum) {
    if (sum > c) return
    if (L === n) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return answer
}

let c = 259
let arr = [81, 58, 42, 33, 61]
console.log(solution(c, arr))
