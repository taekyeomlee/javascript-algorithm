/**
 * 이분탐색 > 입국심사 (Level 3)
 */
function solution(n, times) {
  times.sort((a, b) => a - b)
  let left = 1
  let right = Math.max(...times) * n
  let answer = right

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let cnt = 0

    for (let i = 0; i < times.length; i++) {
      cnt += Math.floor(mid / times[i])
    }

    if (cnt < n) {
      left = mid + 1
    } else {
      answer = Math.min(answer, mid)
      right = mid - 1
    }
  }

  return answer
}
