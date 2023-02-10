/**
 * 463. Island Perimeter (Easy)
 *
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        return dfs(grid, r, c)
      }
    }
  }
  return 0
}

function dfs(grid, r, c) {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] === 0) return 1
  if (grid[r][c] === 2) return 0
  grid[r][c] = 2
  return dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1)
}
