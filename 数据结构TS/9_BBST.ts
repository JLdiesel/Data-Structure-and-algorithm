import BrinarySearchTree from './6_newBinarySearchTree';
import Node from './TreeNode';

export class BBST<E> extends BrinarySearchTree<E> {
  declare root: Node<E>;
  constructor(compare?: (n1: E, n2: E) => number) {
    super(compare);
  }

  //左旋转
  protected rotateLeft(grand: Node<E>) {
    const parentNode: Node<E> = grand.right;
    const child: Node<E> = parentNode.Left;
    grand.right = child;
    parentNode.Left = grand;
    this.afterRotate(grand, parentNode, child);
  }
  //右旋转
  protected rotateRight(grand: Node<E>) {
    const parentNode: Node<E> = grand.Left;
    const child: Node<E> = parentNode.right;
    grand.Left = child;
    parentNode.right = grand;
    this.afterRotate(grand, parentNode, child);
  }

  protected rotate(
    r: Node<E>, //子树的根节点
    a: Node<E>,
    b: Node<E>,
    c: Node<E>,
    d: Node<E>,
    e: Node<E>,
    f: Node<E>,
    g: Node<E>
  ) {
    d.parent = r.parent;
    if (r.isLeftChild()) {
      r.parent.Left = d;
    } else if (r.isRightChild()) {
      r.parent.right = d;
    } else {
      this.root = d;
    }
    if (a !== null) a.parent = b;
    if (c !== null) c.parent = b;
    b.Left = a;
    b.right = c;

    if (e !== null) e.parent = f;
    if (g !== null) g.parent = f;
    f.Left = e;
    f.right = g;

    d.Left = b;
    d.right = f;
    b.parent = d;
    f.parent = d;
  }
  protected afterRotate(grand: Node<E>, parentNode: Node<E>, child: Node<E>) {
    parentNode.parent = grand.parent;
    //grand是root节点
    if (grand.parent === null) this.root = parentNode;
    else {
      grand.isRightChild()
        ? (grand.parent.right = parentNode)
        : (grand.parent.Left = parentNode);
    }
    if (child !== null) {
      child.parent = grand;
    }

    grand.parent = parentNode;
  }
}
