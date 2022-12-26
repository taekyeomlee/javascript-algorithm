/**
 * 6. 학급 회장(Hash Map)
 *
 * N (5 <= N <= 50)
 * 15
 * BACBACCACCBDEDE
 *
 * C
 */

function solution(s) {
  let answer
  let hash = new Map()

  for (let x of s) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1)
    } else {
      hash.set(x, 1)
    }
  }

  let max = Number.MIN_SAFE_INTEGER

  for (let [key, val] of hash) {
    if (val > max) {
      max = val
      answer = key
    }
  }

  return answer
}

let str = 'BACBACCACCBDEDE'
console.log(solution(str))
