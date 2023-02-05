/**
 * 메뉴 리뉴얼 (Lv. 2)
 */
function solution(orders, course) {
  const answer = []
  const map = new Map()
  course.forEach((num) => {
    orders.forEach((order) => {
      const list = combination(order.split(''), num)
      list.forEach((el) => {
        const menu = el.sort().join('')
        if (map.has(menu)) {
          map.set(menu, map.get(menu) + 1)
        } else {
          map.set(menu, 1)
        }
      })
    })
  })
  course.map((num) => {
    const filtered = [...map].filter((v) => v[0].length === num).filter((v) => v[1] >= 2)
    const max = Math.max(...[...filtered].map((v) => v[1]))
    const tmp = filtered.filter((v) => v[1] === max).map((v) => v[0])
    answer.push(...tmp)
  })
  return answer.sort()
}

function combination(arr, num) {
  const result = []
  if (num === 1) return arr.map((el) => [el])
  arr.forEach((fix, idx, ori) => {
    const rest = ori.slice(idx + 1)
    const combiArr = combination(rest, num - 1)
    const combiFix = combiArr.map((el) => [fix, ...el])
    result.push(...combiFix)
  })
  return result
}
