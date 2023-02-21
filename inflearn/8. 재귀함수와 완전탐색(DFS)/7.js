/**
 * 7. 최대점수 구하기(이진트리 DFS)
 *
 * 20
 * 10 5
 * 25 12
 * 15 8
 * 6 3
 * 7 4
 *
 * 41
 */

function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = ps.length
  function DFS(L, sum, time) {
    if (time > m) return
    if (L === n) {
      answer = Math.max(sum, answer)
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L])
      DFS(L + 1, sum, time)
    }
  }
  DFS(0, 0, 0)
  return answer
}

let m = 20
let ps = [10, 25, 15, 6, 7]
let pt = [5, 12, 8, 3, 4]
console.log(solution(m, ps, pt))

// problem score
// problem time
