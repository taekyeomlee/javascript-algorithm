/**
 * 3. Longest Substring Without Repeating Characters (Medium)
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map()
  let max = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(map.get(s[i]) + 1, j)
    }
    map.set(s[i], i)
    max = Math.max(max, i - j + 1)
  }
  return max
}
