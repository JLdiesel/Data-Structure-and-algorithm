var minDepth = function (root) {
  if (!root) return 0;
  const lm = minDepth(root.left);
  const rm = minDepth(root.right);
  if (root.left && root.right) {
    return 1 + Math.min(lm, rm);
  }
  return 1 + Math.max(lm, rm);
};
