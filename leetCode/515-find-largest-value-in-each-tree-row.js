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
var largestValues = function(root) {
  const levels = levelOrderTraverse(root)
  return levels.map(level => Math.max(...level))
};


function levelOrderTraverse (root) {
  var res = [];
  if (!root) return res;
  
  function traverse(root, level) {
    if (root) {
      if (res.length < level) {
        res.push([]);
      }
      var arr = res[level - 1];
      arr.push(root.val);
      traverse(root.left, level + 1);
      traverse(root.right, level + 1);
    }
  }
  traverse(root, 1);
  return res;
}
