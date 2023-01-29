/**
 * 116. Populating Next Right Pointers in Each Node > Linked List, Tree, Depth-First Search, Breadth-First Search, Binary Tree
 *
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let node = root
  while (root && root.left) {
    let tmp = root
    while (tmp) {
      tmp.left.next = tmp.right
      tmp.right.next = tmp.next ? tmp.next.left : null
      tmp = tmp.next
    }
    root = root.left
  }
  return node
}
