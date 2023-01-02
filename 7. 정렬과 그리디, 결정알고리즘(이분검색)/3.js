/**
 * 3. Special Sort(버블정렬응용)
 *
 * 8
 * 1 2 3 -3 -2 5 6 -6
 *
 * -3 -2 -6 1 2 3 5 6
 */

function solution(arr) {
  let answer = arr
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log(arr)
  return answer
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6]
console.log(solution(arr))
