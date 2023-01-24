/**
 * 977. Squares of a Sorted Array > Array, Two Pointers, Sorting
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let answer = Array.from({ length: nums.length }, () => 0)
  let lt = 0
  let rt = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[lt]) > Math.abs(nums[rt])) {
      answer[i] = nums[lt++] ** 2
    } else {
      answer[i] = nums[rt--] ** 2
    }
  }
  return answer
}
