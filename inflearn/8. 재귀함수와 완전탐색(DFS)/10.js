/**
 * 10. 순열 구하기
 *
 * 2
 * 3 6 9
 *
 * 3 6
 * 3 9
 * 6 3
 * 6 9
 * 9 3
 * 9 6
 * 6
 */

function solution(m, arr) {
  let answer = []
  let n = arr.length
  let ch = Array.from({ length: n }, () => 0)
  let tmp = Array.from({ length: m }, () => 0)
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1
          tmp[L] = arr[i]
          DFS(L + 1)
          ch[i] = 0
        }
      }
    }
  }
  DFS(0)
  return answer
}

let m = 2
let arr = [3, 6, 9]
console.log(solution(m, arr))
