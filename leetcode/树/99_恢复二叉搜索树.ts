/*
 * @Author: your name
 * @Date: 2022-02-07 18:20:03
 * @LastEditTime: 2022-02-10 11:22:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\leetcode\树\99_恢复二叉搜索树.ts
 */
//中序遍历 一个逆序对或两个逆序对  存储第一个错误的节点和第二个错误的节点
//一个逆序对  取first=prev second=root   两个逆序对  first=第一个错误的节点的prev second=第二个错误节点的root 11 17 44 22 28 37 42 18 62 first=44  second =18 第一个逆序对 44 22 第二个 42 18
function recoverTree(root: TreeNode | null): void {
  //上一次中序遍历过的节点
  let prev: TreeNode = null;
  //第一次错误的节点
  let first: TreeNode = null;
  //第二次错误的节点
  let second: TreeNode = null;
  function findWrongNodes(root: TreeNode) {
    if (!root) return;
    findWrongNodes(root.left);
    find(root);
    // if (prev !== null && prev.val > root.val) {
    //   //第二个错误节点  如果上一个的val比这个大 ，证明
    //   second = root;
    //   if (first !== null) return;
    //   first = prev;
    // }
    // prev = root;
    findWrongNodes(root.right);
  }
  function find(node: TreeNode) {
    if (prev !== null && prev.val > node.val) {
      //第二个错误节点  如果上一个的val比这个大 ，证明
      second = node;
      if (first !== null) return;
      first = prev;
    }
    prev = node;
  }
  findWrongNodes(root);
  let tmp = first.val;
  first.val = second.val;
  second.val = tmp;
}

function recoverTree2(root: TreeNode) {
  let node: TreeNode = root;
  //上一次中序遍历过的节点
  let prev: TreeNode = null;
  //第一次错误的节点
  let first: TreeNode = null;
  //第二次错误的节点
  let second: TreeNode = null;
  while (node) {
    if (node.left) {
      //找到前驱节点  node.left是不为空的
      let prevNode = node.left;
      while (prevNode.right && prevNode.right !== node) {
        prevNode = prevNode.right;
      }
      if (!prevNode.right) {
        prevNode.right = node;
        node = node.left;
      }
      if (prevNode.right === node) {
        prevNode.right = null;
        find(node);
        // console.log(node.val);
        node = node.right;
      }
    } else {
      find(node);
      //   console.log(node.val);
      node = node.right;
    }
  }
  let tmp = first.val;
  first.val = second.val;
  second.val = tmp;
  function find(node: TreeNode) {
    if (prev !== null && prev.val > node.val) {
      //第二个错误节点  如果上一个的val比这个大 ，证明
      second = node;
      if (first !== null) return;
      first = prev;
    }
    prev = node;
  }
}
