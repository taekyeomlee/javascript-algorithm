/**
 * 3-1. 회문문자열
 */
// not reverse
function solution(s) {
  let answer = 'YES'
  s = s.toLowerCase()
  let len = s.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return 'NO'
  }
  return answer
}

// reverse
function solution(s) {
  let answer = 'YES'
  s = s.toLowerCase()
  if (s.split('').reverse().join('') !== s) return 'NO'
  return answer
}

let str = 'gooG'
console.log(solution(str)) // YES

str = 'goooG'
console.log(solution(str)) // YES

str = 'gooo'
console.log(solution(str)) // NO
