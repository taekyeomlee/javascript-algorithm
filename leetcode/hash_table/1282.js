/**
 * 1282. Group the People Given the Group Size They Belong To (Medium)
 *
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const answer = []
  const map = new Map()
  for (let i = 0; i < groupSizes.length; i++) {
    if (map.has(groupSizes[i])) {
      map.set(groupSizes[i], map.get(groupSizes[i]).concat(i))
    } else {
      map.set(groupSizes[i], [i])
    }
    if (map.get(groupSizes[i]).length === groupSizes[i]) {
      answer.push(map.get(groupSizes[i]))
      map.delete(groupSizes[i])
    }
  }
  return answer
}
