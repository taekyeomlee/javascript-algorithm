/**
 * 283. Move Zeroes > Array, Two Pointers
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i]
    }
  }
  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0
  }
}
