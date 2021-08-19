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
    if (root === null) return root
    let roots = root.left;
    root.left = root.right;
    root.right = roots
    invertTree(root.left)
    invertTree(root.right)
    return root
};

//中序遍历
var invertTree = function (root) {
    if (root === null) return root
    invertTree(root.left)
    let roots = root.left;
    root.left = root.right;
    root.right = roots
    invertTree(root.left)
    return root
};
// 层序遍历
var invertTree = function (root) {
    if (root === null) return root
    const arr = []
    let node
    arr.push(root)
    while (arr.length !== 0) {
        node = arr.shift()
        let roots = node.left;
        node.left = node.right;
        node.right = roots
        if (node.left !== null) {
            arr.push(node.left)
        }
        if (node.right !== null) {
            arr.push(node.right)
        }
    }
    return root
};