/**
 * 1. 올바른 괄호(스택)
 *
 * 문자열의 최대 길이는 30
 *
 * (()(()))(()
 *
 * NO
 */

function solution(str) {
  let answer = 'YES'
  let stack = []

  for (x of str) {
    if (x === '(') {
      stack.push(x)
    } else {
      if (stack.length === 0) return 'NO'

      stack.pop()
    }
  }

  if (stack.length > 0) return 'NO'

  return answer
}

let a = '(()(()))(()'
console.log(solution(a))

a = '(())'
console.log(solution(a))

a = '(()))'
console.log(solution(a))

a = '((())'
console.log(solution(a))
