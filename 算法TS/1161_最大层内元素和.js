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
 * @return {number}
 */
var maxLevelSum = function (root) {
  if (!root) return 0;
  const map = {};
  const dfs = (node, level) => {
    if (!node) return;
    map[level] = (map[level] || 0) + node.val;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 1);
  let maxSum = -Infinity;
  let maxLevel = 1;
  for (const [level, sum] of Object.entries(map)) {
    if (sum > maxSum) {
      maxSum = sum;
      maxLevel = parseInt(level);
    }
  }
  return maxLevel;
};
