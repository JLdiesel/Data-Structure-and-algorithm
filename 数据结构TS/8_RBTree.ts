import { BBST } from './9_BBST';
import Node from './TreeNode';
class RBTree<E> extends BBST<E> {
  static RED: boolean = false;
  static BLACK: boolean = true;
  constructor(compare?: (n1: E, n2: E) => number) {
    super(compare);
  }
  protected createNode(element: E, parent: Node<E>): Node<E> {
    return new RBNode<E>(element, parent);
  }
  //给节点染色
  private color(node: Node<E>, color: boolean): Node<E> {
    if (node === null) return node;
    (node as RBNode<E>).color = color;
    return node;
  }
  //把节点染红
  private red(node: Node<E>): Node<E> {
    return this.color(node, RBTree.RED);
  }
  //把节点染黑
  private black(node: Node<E>): Node<E> {
    return this.color(node, RBTree.BLACK);
  }
  //查看是什么颜色
  private colorOf(node: Node<E>): boolean {
    //如果是null就是黑色，不然就看它内部的颜色的
    return node === null ? RBTree.BLACK : (node as RBNode<E>).color;
  }
  //判断是否为黑色
  private isBlack(node: Node<E>): boolean {
    return this.colorOf(node) === RBTree.BLACK;
  }
  //判断是否为红色
  private isRed(node: Node<E>): boolean {
    return this.colorOf(node) === RBTree.RED;
  }
  //node 添加的节点
  protected afterAddNode(node: Node<E>) {
    const parent: Node<E> = node.parent;
    //如果parent为空，则添加的为根节点
    if (parent === null) {
      this.black(node);
      return;
    }
    //如果父节点为黑色，不需要平衡
    if (this.isBlack(parent)) return;
    //叔父节点
    const uncle: Node<E> = parent.sibling();
    //祖父节点
    const grand = this.red(parent.parent);
    //如果叔父节点为红色 则上溢
    if (this.isRed(uncle)) {
      this.black(parent);
      this.black(uncle);
      this.afterAddNode(grand);
      return;
    }
    //叔父节点不是红色
    if (parent.isLeftChild()) {
      //L
      if (node.isLeftChild()) {
        //LL
        this.black(parent);
      } else {
        //LR
        this.black(node);
        this.rotateLeft(parent);
      }
      this.rotateRight(grand);
    } else {
      if (node.isLeftChild()) {
        //RL
        this.black(node);
        this.rotateRight(parent);
      } else {
        //RR
        this.black(parent);
      }
      this.rotateLeft(grand);
    }
  }
  //node 被删除的节点
  protected afterRemove(node: Node<E>, replacement: Node<E>) {
    if (this.isRed(node)) return; //如果删除的是红色,直接返回
    if (this.isRed(replacement)) {
      this.black(replacement);
      return; //用以取代的node的子节点是红色
    }
    //删除黑色叶子节点
    const parent: Node<E> = node.parent;
    if (parent === null) return; //删除的是根节点
  }
}
class RBNode<E> extends Node<E> {
  color: boolean;
  constructor(element: E, parent: Node<E>) {
    super(element, parent);
    this.color = RBTree.RED;
  }
}

export default RBTree;
