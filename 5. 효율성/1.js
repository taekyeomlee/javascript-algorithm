/**
 * 1. 두 배열 합치기(Two Pointers Algorithm)
 * 3
 * 1 3 5
 * 5
 * 2 3 6 7 9
 *
 * 1 2 3 3 5 6 7 9
 */

function solution(arr1, arr2) {
  let answer = []
  let len1 = arr1.length
  let len2 = arr2.length
  let p1 = (p2 = 0)

  while (p1 < len1 && p2 < len2) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++])
    } else {
      answer.push(arr2[p2++])
    }
  }

  while (p1 < len1) {
    answer.push(arr1[p1++])
  }

  while (p2 < len2) {
    answer.push(arr2[p2++])
  }

  return answer
}

const a = [1, 3, 5]
const b = [2, 3, 6, 7, 9]
console.log(solution(a, b))
