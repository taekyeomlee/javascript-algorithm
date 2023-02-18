/**
 * 1512. Number of Good Pairs (Easy)
 *
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }
  return [...map]
    .filter((v) => v[1] >= 2)
    .map((v) => v[1])
    .reduce((acc, cur) => acc + (cur * (cur - 1)) / 2, 0)
}
