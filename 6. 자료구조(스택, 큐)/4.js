/**
 * 4. 후위식 (postfix) 연산(스택)
 *
 * 3 * (5 + 2) - 9
 * 연산식의 길이는 50을 넘지 않습니다.
 * 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
 *
 * 352+*9-
 *
 * 12
 */

function solution(s) {
  let answer
  let stack = []

  for (let x of s) {
    if (!isNaN(x)) {
      stack.push(Number(x))
    } else {
      let rt = stack.pop()
      let lt = stack.pop()

      if (x === '+') {
        stack.push(lt + rt)
      } else if (x === '-') {
        stack.push(lt - rt)
      } else if (x === '*') {
        stack.push(lt * rt)
      } else if (x === '/') {
        stack.push(lt / rt)
      }
    }
  }

  answer = stack[0]

  return answer
}

let str = '352+*9-'
console.log(solution(str))
