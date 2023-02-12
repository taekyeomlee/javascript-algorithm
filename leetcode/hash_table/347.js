/**
 * 347. Top K Frequent Elements (Medium)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }
  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((v) => v[0])
}
