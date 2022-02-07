/**
 * 去以root为根节点的二叉树中查找p\q的最近公共祖先
 *
 * 如果p、q同时存在于这颗二叉树中，就能成功返回最近公共祖先
 * 如果p、q都不存在于这颗二叉树中，返回null
 * 如果只有p存在与这颗二叉树中，返回p；
 * 如果只有q存在于这颗二叉树中，返回q
 */

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
}
