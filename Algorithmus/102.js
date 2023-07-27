/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var result = [];
var levelOrder = function(root) {
  helper(root, 0);
  var test = new Array(result[result.length - 1].depth + 1).fill([]);

  for (let i = 0; i < result.length; i++) {
    console.log();
    test[result[i].depth] = result[i].val;
  }
  return test;
};
var helper = (root, depth) => {
  result.push({ vale: root.val, depth: depth });
  if (root.left) helper(root.left, depth + 1);
  if (root.right) helper(root.right, depth + 1);
  if (!root.left && !root.right) return;
};


var levelOrder = function(root) {
  let result = []
  let lvlnow = 0
  
  function travel(node, level) {
      if (node === null) {
          return
      }
      let arr = result[level]
      if (!arr) {
          arr = []
          result[level] = arr
      }
      arr.push(node.val)
      travel(node.left, level + 1)
      travel(node.right, level + 1)
  }
  
  travel(root, 0)
  
  return result
};