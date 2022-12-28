/**
 * 7. 아나그램(Hash Map)
 *
 * AbaAeCe
 * baeeACA
 * YES
 *
 * abaCC
 * Caaab
 * NO
 */

function solution(str1, str2) {
  let answer = 'YES'
  let hash = new Map()

  for (let x of str1) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1)
    } else {
      hash.set(x, 1)
    }
  }

  for (let x of str2) {
    if (!hash.has(x) || hash.get(x) === 0) return 'NO'

    hash.set(x, hash.get(x) - 1)
  }

  return answer
}

let a = 'AbaAeCe'
let b = 'baeeACA'
console.log(solution(a, b)) // true

a = 'abaCC'
b = 'Caaab'
console.log(solution(a, b)) // false
