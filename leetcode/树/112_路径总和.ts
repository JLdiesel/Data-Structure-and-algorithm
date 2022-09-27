/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum: (tree: TreeNode, sum: number) => boolean = function (
  root,
  targetSum
) {
  if (!root) return false;
  if (!root.left && !root.right) {
    if (root.val === targetSum) return true;
    return false;
  }
  if (root.left || root.right) {
    return (
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    );
  }
};
