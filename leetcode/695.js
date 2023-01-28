/**
 * 695. Max Area of Island > Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
 *
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let area = 0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      area = Math.max(area, dfs(grid, r, c))
    }
  }
  return area
}

function dfs(grid, row, col) {
  if (row >= grid.length || col >= grid[0].length || col < 0 || row < 0 || grid[row][col] !== 1) return 0
  grid[row][col] = 2
  const up = dfs(grid, row + 1, col)
  const down = dfs(grid, row - 1, col)
  const right = dfs(grid, row, col + 1)
  const left = dfs(grid, row, col - 1)
  return 1 + up + down + left + right
}
