/**
 * 771. Jewels and Stones (Easy)
 *
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = new Set()
  let cnt = 0
  for (const jewel of jewels) {
    set.add(jewel)
  }
  for (const stone of stones) {
    if (set.has(stone)) cnt++
  }
  return cnt
}

var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels)
  return stones.split('').reduce((acc, cur) => acc + set.has(cur), 0)
}
