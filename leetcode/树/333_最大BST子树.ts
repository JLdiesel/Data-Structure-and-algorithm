/*
 * @Author: your name
 * @Date: 2022-02-10 11:35:39
 * @LastEditTime: 2022-02-11 15:57:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web\Data-Structure-and-algorithm\leetcode\树\333_最大BST子树.ts
 */
function 最大BST子树() {
  //     function isBST(root:TreeNode){
  //         return 0;
  //     }
  //     function nodesCount(root:TreeNode){
  //         return 0;
  //     }
  //    function largestBSTSubTree(root:TreeNode){
  //         if(root==null) return 0;
  //         if(isBST(root)) return nodesCount(root);
  //         return Math.max(largestBSTSubTree(root.left),largestBSTSubTree(root.right))
  //     }
  function largestBSTSubTree(root: TreeNode) {
    return root === null ? 0 : getInfo(root).size;
  }
  /**
   * 返回以root为根节点的二叉树的最大BST子树信息
   * @param root
   */
  function getInfo(root: TreeNode): Info {
    if (root === null) return null;
    let li: Info = getInfo(root.left),
      ri: Info = getInfo(root.right);
    //4种情况
    /* 
    1.li!==null&&ri!==null  左子树或右子树不为空  以root为根节点的二叉树就是一颗BST，最大BST子树就是其本身；
    && li.root===root.left&&root.val>li.max  左子树的最大BST子树根节点为左子树根节点 且 根节点的值大于左子树的最大值
    && ri.root===root.right&&root.val<ri.min 右子树的最大BST子树根节点为右子树根节点 且 根节点的值小于右子树的最小值
     最大BST子树为左边+root
    2. li!==null&&ri===null 右边为空  左不为空 
    && li.root===root.left && root.val>li.max  左子树的最大BST子树根节点为左子树根节点 且 根节点的值大于左子树的最大值
      最大BST子树为右边+root
    3. li===null&&ri!==null 右不为空  左边为空 
    && ri.root===root.right && root.val<ri.min 右子树的最大BST子树根节点为右子树根节点 且 根节点的值小于右子树的最小值
    最大BST子树就为 root 本身单节点
    4. li===null&&ri===null; 左右都为空
    */
   if( 以root为根节点的二叉树就是一颗BST，最大BST子树就是其本身；){
    return new Info(root,1+li.size+ri.size,ri.max)
   }
    return;
  }
  class Info {
    //根节点
    root: TreeNode | null;
    //节点总数
    size: number;
    //最大值
    max: number;
    //最小值
    min: number;
    constructor(root: TreeNode | null, size: number, max: number, min: number) {
      this.root = root;
      this.size = size;
      this.max = max;
      this.min = min;
    }
  }
}
