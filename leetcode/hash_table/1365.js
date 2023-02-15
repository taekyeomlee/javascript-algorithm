/**
 * 1365. How Many Numbers Are Smaller Than the Current Number (Easy)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const map = new Map()
  const sorted = [...nums].sort((a, b) => a - b)
  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], i)
    }
  }
  return nums.map((v) => map.get(v))
}
