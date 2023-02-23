/**
 * 17. Letter Combinations of a Phone Number (Medium)
 *
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits.length === 0) {
    return []
  }

  const result = []
  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const backtrack = (combination, nextDigits) => {
    if (nextDigits.length === 0) {
      result.push(combination)
    } else {
      const letters = phoneMap[nextDigits[0]]
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i]
        backtrack(combination + letter, nextDigits.slice(1))
      }
    }
  }

  backtrack('', digits)

  return result
}
