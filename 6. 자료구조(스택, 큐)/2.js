/**
 * 2. 괄호 문자 제거(스택)
 *
 * (A(BC)D)EF(G(H)(IJ)K)LM(N)
 *
 * EFLM
 */

function solution(s) {
  let answer
  let stack = []

  for (x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x)
    }
  }

  answer = stack.join('')

  return answer
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)'
console.log(solution(str))
