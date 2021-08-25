import { BBST } from './9_BBST';
import TreeNode from './TreeNode';
class AVLTreeNode<E> extends TreeNode<E> {
  declare Left: AVLTreeNode<E>;
  declare right: AVLTreeNode<E>;
  height: number;
  declare parent: AVLTreeNode<E>;
  constructor(element: E, parent: AVLTreeNode<E>) {
    super(element, parent);
    this.height = 1;
  }
  balanceFactor() {
    let leftHeight = this.Left === null ? 0 : this.Left.height;
    let rightHeight = this.right === null ? 0 : this.right.height;
    return leftHeight - rightHeight;
  }
  updateHeight() {
    let leftHeight = this.Left === null ? 0 : this.Left.height;
    let rightHeight = this.right === null ? 0 : this.right.height;
    this.height = 1 + Math.max(leftHeight, rightHeight);
  }
  tallerChild(): AVLTreeNode<E> {
    let leftHeight = this.Left === null ? 0 : this.Left.height;
    let rightHeight = this.right === null ? 0 : this.right.height;
    if (leftHeight > rightHeight) return this.Left;
    if (rightHeight > leftHeight) return this.right;
    return this.isLeftChild ? this.Left : this.right;
  }
}

class AVLTree<E> extends BBST<E> {
  declare root: AVLTreeNode<E>;
  constructor() {
    super();
  }
  protected rebalance(grand: AVLTreeNode<E>) {
    let parentNode: AVLTreeNode<E> = (grand as AVLTreeNode<E>).tallerChild();
    let node: AVLTreeNode<E> = (grand as AVLTreeNode<E>).tallerChild();
    if (parentNode.isLeftChild()) {
      //L
      if (node.isLeftChild()) {
        //LL
        this.rotateRight(grand);
      } else {
        //LR
        this.rotateLeft(parentNode);
        this.rotateRight(grand);
      }
    } else {
      //R
      if (node.isLeftChild()) {
        //RL
        this.rotateRight(parentNode);
        this.rotateLeft(grand);
      } else {
        //RR
        this.rotateLeft(grand);
      }
    }
  }
  protected rebalance2(grand: AVLTreeNode<E>) {
    let parentNode: AVLTreeNode<E> = grand.tallerChild();
    let node: AVLTreeNode<E> = grand.tallerChild();
    if (parentNode.isLeftChild()) {
      //L
      if (node.isLeftChild()) {
        //LL
        this.rotate(
          grand,
          node.Left,
          node,
          node.right,
          parentNode,
          parentNode.right,
          grand,
          grand.right
        );
      } else {
        //LR
        this.rotate(
          grand,
          parentNode.Left,
          parentNode,
          node.Left,
          node,
          node.right,
          grand,
          grand.right
        );
      }
    } else {
      //R
      if (node.isLeftChild()) {
        //RL
        this.rotate(
          grand,
          grand.Left,
          grand,
          node.Left,
          node,
          node.right,
          parentNode,
          parentNode.right
        );
      } else {
        //RR
        this.rotate(
          grand,
          grand.Left,
          grand,
          parentNode.Left,
          parentNode,
          node.Left,
          node,
          node.right
        );
      }
    }
  }
  protected afterAddNode(node: AVLTreeNode<E>) {
    while ((node = node.parent) !== null) {
      //判断node是否平衡
      if (this.isBalanced(node)) {
        this.updateHeight(node);
      } else {
        //恢复平衡的方法s
        this.rebalance(node);
        //整棵树恢复平衡
        break;
      }
    }
  }
  protected afterRemove(node: AVLTreeNode<E>) {
    while ((node = node.parent) !== null) {
      //判断node是否平衡
      if (this.isBalanced(node)) {
        this.updateHeight(node);
      } else {
        //恢复平衡的方法s
        this.rebalance(node);
      }
    }
  }
  protected createNode(element: E, parent: AVLTreeNode<E>): AVLTreeNode<E> {
    return new AVLTreeNode(element, parent);
  }
  //判断是否平衡
  private isBalanced(node: AVLTreeNode<E>): Boolean {
    return Math.abs(node.balanceFactor()) <= 1;
  }
  //更新高度
  private updateHeight(node: AVLTreeNode<E>) {
    node.updateHeight();
  }
  protected afterRotate(
    grand: AVLTreeNode<E>,
    parentNode: AVLTreeNode<E>,
    child: AVLTreeNode<E>
  ) {
    super.afterRotate(grand, parentNode, child);
    this.updateHeight(grand);
    this.updateHeight(parentNode);
  }
  protected rotate(
    r: AVLTreeNode<E>, //子树的根节点
    a: AVLTreeNode<E>,
    b: AVLTreeNode<E>,
    c: AVLTreeNode<E>,
    d: AVLTreeNode<E>,
    e: AVLTreeNode<E>,
    f: AVLTreeNode<E>,
    g: AVLTreeNode<E>
  ) {
    super.rotate(r, a, b, c, d, e, f, g);
    this.updateHeight(b);
    this.updateHeight(f);
    this.updateHeight(d);
  }
  //恢复平衡  参数grand为高度最低的不平衡节点
}
