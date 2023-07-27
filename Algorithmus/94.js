
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function (root) {
  var result = []
  var iterater = (test) => {
    if (test == null) { return }
    if (test.left) {
       iterater(test.left)
    }
    result.push(test.val)
    if (test.right) {
       iterater(test.right)
    }
  }
  iterater(root)
  return result
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // Solution 1
  let visited = [];
  function traverse(node) {
    if (node === null) return;
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return visited;

};