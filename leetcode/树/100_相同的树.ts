/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (p?.val !== q?.val) return false;
  const stark = [];
  const stark2 = [];
  stark.push(p);
  stark2.push(q);
  while (stark.length || stark2.length) {
    const node = stark.pop();
    const node2 = stark2.pop();
    if (node?.val !== node2?.val) return false;
    if (node.left || node2.left) {
      stark.push(node.left);
      stark2.push(node2.left);
    }
    if (node.right || node2.right) {
      stark.push(node.right);
      stark2.push(node2.right);
    }
  }
  return true;
};
var isSameTree2 = function (p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (q && !p)) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
