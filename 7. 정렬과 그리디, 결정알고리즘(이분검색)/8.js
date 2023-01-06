/**
 * 8. 회의실 배정
 *
 * 5
 * 1 4
 * 2 3
 * 3 5
 * 4 6
 * 5 7
 *
 * 3
 */

function solution(meeting) {
  let answer = 0
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
  })
  let et = 0
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++
      et = x[1]
    }
  }
  return answer
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]
console.log(solution(arr)) // 3

arr = [
  [3, 3],
  [1, 3],
  [2, 3],
]
console.log(solution(arr)) // 2
