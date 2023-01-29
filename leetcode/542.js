/**
 * 542. 01 Matrix > Array, Dynamic Programming, Breadth-First Search, Matrix
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const queue = []
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[0].length; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c, 0])
      } else {
        mat[r][c] = Infinity
      }
    }
  }
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  while (queue.length) {
    let pos = queue.shift()
    if (mat[pos[0]][pos[1]] > pos[2]) {
      mat[pos[0]][pos[1]] = pos[2]
    }
    dir.forEach((d) => {
      let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1]
      if (next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length) {
        if (mat[next[0]][next[1]] === Infinity) {
          queue.push(next)
        }
      }
    })
  }
  return mat
}
