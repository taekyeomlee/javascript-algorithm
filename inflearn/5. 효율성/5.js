/**
 * 5. 최대 매출(Sliding Window)
 *
 * 연속된 3일간의 최대 매축액
 * N = 10
 * K = 3
 * arr = 12 15 11 20 25 10 20 19 13 15
 *
 * 56
 */

function solution(k, arr) {
  let answer = 0
  let sum = 0
  let left = (right = 0)

  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }

  answer = sum

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]
    answer = Math.max(answer, sum)
  }

  return answer
}

let k = 3
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
console.log(solution(k, arr))
