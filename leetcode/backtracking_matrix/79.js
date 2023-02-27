/**
 * 79. Word Search (Medium)
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const backtrack = (row, col, pos) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length || board[row][col] !== word[pos]) {
      return false
    }

    if (pos === word.length - 1) {
      return true
    }

    const char = board[row][col]
    board[row][col] = ''
    for (const [dr, dc] of dirs) {
      const nr = row + dr
      const nc = col + dc

      if (backtrack(nr, nc, pos + 1)) {
        return true
      }
    }
    board[row][col] = char

    return false
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (backtrack(r, c, 0)) {
        return true
      }
    }
  }

  return false
}
