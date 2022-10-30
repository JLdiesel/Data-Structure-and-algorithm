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
var minCameraCover = function (root) {
  const dp = [[], []];
  function getDp(root, dd) {
    if (!root) {
      dd[0][0] = 0;
      dd[0][1] = 10000;
      dd[1][0] = 0;
      dd[1][1] = 10000;
      return;
    }
    if (!root.left && !root.right) {
      dd[0][0] = 10000;
      dd[0][1] = 1;
      dd[1][0] = 0;
      dd[1][1] = 10000;
      return;
    }
    const l = [[], []],
      r = [[], []];
    getDp(root.left, l);
    getDp(root.right, r);
    dd[0][0] = Math.min(
      l[0][1] + r[0][1],
      l[0][0] + r[0][1],
      l[0][1] + r[0][0]
    );
    dd[1][0] = Math.min(dd[0][0], l[0][0] + r[0][0]);
    dd[0][1] =
      Math.min(
        l[1][0] + r[1][0],
        l[1][1] + r[1][0],
        l[1][1] + r[1][1],
        l[1][0] + r[1][1]
      ) + 1;
    dd[1][1] = dd[0][1];
    return;
  }
  getDp(root, dp);
  return Math.min(dp[0][1], dp[0][0]);
};
