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
 * @return {TreeNode}
 */
//前序遍历
var invertTree = function (root) {
  if (root === null) return root;
  let cpm = root.left;
  root.left = root.right;
  root.right = cpm;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

//中序遍历
var invertTree = function (root) {
  if (root === null) return root;
  invertTree(root.left);
  let cpm = root.left;
  root.left = root.right;
  root.right = cpm;
  invertTree(root.right);
  return root;
};
// 层序遍历
var invertTree = function (root) {
  if (root === null) return root;
  const arr = [];
  let node;
  arr.push(root);
  while (arr.length !== 0) {
    node = arr.shift();
    let cmp = node.left;
    node.left = node.right;
    node.right = cmp;
    if (node.left !== null) {
      arr.push(node.left);
    }
    if (node.right !== null) {
      arr.push(node.right);
    }
  }
  return root;
};
