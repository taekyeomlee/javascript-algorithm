/**
 * 3. 연속부분수열1(Two Pointers Algorithm)
 *
 * 8 6
 * N = 8
 * M = 6 (합)
 * 1 2 1 3 1 1 1 2
 *
 * 3
 */

function solution(m, arr) {
  let answer = 0
  let sum = 0
  let left = (right = 0)

  while (right < arr.length) {
    sum += arr[right++]

    if (sum === m) {
      answer++
    }

    while (sum >= m) {
      sum -= arr[left++]
      if (sum === m) {
        answer++
      }
    }
  }
  return answer
}

let m = 6
let arr = [1, 2, 1, 3, 1, 1, 1, 2]

console.log(solution(m, arr))

arr = [1, 1, 1, 1, 2, 4]
console.log(solution(m, arr)) // 2
