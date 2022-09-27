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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function isSame(left, right) {
    if (!left && !right) return true;

    if (left?.left?.val !== right?.right?.val) return false;
    if (left?.right?.val !== right?.left?.val) return false;
    return isSame(left?.left, right?.right) && isSame(left?.right, right?.left);
  }
  if (!root) return true;
  if (root?.left?.val !== root?.right?.val) return false;
  return isSame(root.left, root.right);
};
var isSymmetric2 = function (root) {
  if (!root) return true;
  if (root?.left?.val !== root?.right?.val) return false;
  const stark = [root.left];
  const stark2 = [root.right];

  while (stark.length || stark2.length) {
    const item = stark.shift();
    const item2 = stark2.shift();
    if (item?.left?.val !== item2?.right?.val) return false;
    if (item?.right?.val !== item2?.left?.val) return false;
    if (item?.left || item2?.right) {
      stark.push(item?.left);
      stark2.push(item2?.right);
    }
    if (item2?.left || item?.right) {
      stark.push(item2?.left);
      stark2.push(item?.right);
    }
  }
  return true;
};
