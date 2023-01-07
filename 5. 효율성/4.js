/**
 * 4. 연속부분수열2(Two Pointers Algorithm)
 *
 * 합이 특정숫자 M이하
 * 5 5
 * N = 5
 * M = 5 (합)
 * 1 3 1 2 3
 */

function solution(m, arr) {
  let answer = 0
  let sum = 0
  let left = (right = 0)

  while (right < arr.length) {
    sum += arr[right]

    while (sum > m) {
      sum -= arr[left++]
    }

    answer += right - left + 1
    right++
  }

  return answer
}

let m = 5
let arr = [1, 3, 1, 2, 3]
console.log(solution(m, arr)) // 10

arr = [1, 1, 1]
console.log(solution(m, arr)) // 6

m = 3
arr = [1, 2, 3]
console.log(solution(m, arr)) // 4
