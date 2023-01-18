/**
 * 코딩테스트 연습 > 스택/큐 > 프린터
 */

function solution(priorities, location) {
  let answer = 0
  const list = priorities.map((v, i) => ({
    pos: i,
    val: v,
  }))
  while (list.length !== 0) {
    const cur = list.shift()
    const max = Math.max(...list.map((v) => v.val))
    if (cur.val >= max) {
      answer++
      if (cur.pos === location) return answer
    } else {
      list.push(cur)
    }
  }
}
