export default class Node<E> {
  element: E;
  Left: Node<E>;
  right: Node<E>;
  parent: Node<E> | null;
  constructor(element: E, parent: Node<E> | null) {
    this.element = element;
    this.parent = parent;
    this.Left = null;
    this.right = null;
  }
  isLeaf(): boolean {
    return this.Left === null && this.right === null;
  }
  hasTwoChild(): boolean {
    return this.Left !== null && this.right !== null;
  }
  isLeftChild(): boolean {
    return this.parent !== null && this === this.parent.Left;
  }
  isRightChild(): boolean {
    return this.parent !== null && this === this.parent.right;
  }
  sibling(): Node<E> {
    if (this.isLeftChild()) {
      return this.parent.right;
    }
    if (this.isRightChild()) {
      return this.parent.Left;
    }

    return null;
  }
}
