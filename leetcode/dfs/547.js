/**
 * 547. Number of Provinces
 *
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const visited = Array.from({ length: isConnected.length }, () => 0)
  let num = 0
  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i] === 0) {
      dfs(i)
      num++
    }
  }
  function dfs(i) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && visited[j] === 0) {
        visited[j] = 1
        dfs(j)
      }
    }
  }
  return num
}
