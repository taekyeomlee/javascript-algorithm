/**
 * 2. 공통원소구하기(Two Pointers Algorithm)
 * 5
 * 1 3 9 5 2
 * 5
 * 3 2 5 7 8
 *
 * 2 3 5
 */

function solution(arr1, arr2) {
  const answer = []
  let p1 = (p2 = 0)

  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++])
      p2++
    } else if (arr1[p1] < arr2[p2]) {
      p1++
    } else {
      p2++
    }
  }

  return answer
}

let a = [1, 3, 9, 5, 2]
let b = [3, 2, 5, 7, 8]
console.log(solution(a, b))

a = [1, 3, 10, 5, 2]
console.log(solution(a, b))
