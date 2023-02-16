/**
 * 264. Ugly Number II (Medium)
 *
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const answer = [1]
  let i2 = 0,
    i3 = 0,
    i5 = 0
  for (let i = 0; i < n - 1; i++) {
    const min = Math.min(answer[i2] * 2, answer[i3] * 3, answer[i5] * 5)
    if (min === answer[i2] * 2) i2++
    if (min === answer[i3] * 3) i3++
    if (min === answer[i5] * 5) i5++
    answer[i + 1] = min
  }
  return answer[n - 1]
}
