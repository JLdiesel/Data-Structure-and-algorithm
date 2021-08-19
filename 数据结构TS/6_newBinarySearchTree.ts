import BrinaryTree from './5_BinaryTree';
import Node from './TreeNode';

class BrinarySearchTree<E> extends BrinaryTree<E> {
  private compare: (n1: E, n2: E) => number;
  constructor(compare?: (n1: E, n2: E) => number) {
    super();
    this.compare = compare;
  }
  //添加子节点
  add(element: E): void {
    this.elementNotNullCheck(element);
    //添加第一个节点
    if (this.root === null) {
      this.root = this.createNode(element, null);
      this.size++;
      this.afterAddNode(this.root);
      return;
    }
    //添加的不是第一个
    let node: Node<E> = this.root;
    let parentNode: Node<E> = this.root;
    let result = 0;
    while (node !== null) {
      //比较器

      result = this.compareTo(element, node.element);
      parentNode = node;
      //如果e1>e2，则找到右边
      if (result > 0) {
        node = node.right;
      } else if (result < 0) {
        node = node.Left;
      } else {
        node.element = element;
        return;
      }
    }
    let newNode: Node<E> = this.createNode(element, parentNode);
    if (result > 0) {
      parentNode.right = newNode;
    } else if (result < 0) {
      parentNode.Left = newNode;
    }
    this.afterAddNode(newNode);

    this.size++;
  }
  protected afterAddNode(node: Node<E>) {}

  //根据一个元素查找对应节点
  private findNode(element: E): Node<E> {
    let node: Node<E> = this.root;
    while (node != null) {
      let cmp = this.compareTo(element, node.element);
      if (cmp === 0) return node;
      if (cmp > 0) {
        node = node.right;
      } else {
        //cmp<0
        node = node.Left;
      }
    }

    return null;
  }
  protected afterRemove(node: Node<E>) {}
  //根据节点删除
  private removeNode(node: Node<E>): void {
    if (node === null) return;

    this.size--;

    if (node.hasTwoChild()) {
      //度为2的节点
      //找到前置\后继节点
      // let s: Node<E> = this.preNode(node);
      let s: Node<E> = this.nextNode(node);
      //用前置/后继节点替代
      node.element = s.element;
      //删除后继节点
      node = s;
    }
    //删除node节点(node度必然为0||1)
    //要替代父节点的节点
    let replacement = node.Left != null ? node.Left : node.right;
    if (replacement !== null) {
      //node是度为1的节点
      //1。更改parent
      replacement.parent = node.parent;
      //2.更改 parent的左或者右节点
      if (node.parent === null) {
        //node是度为1的根节点
        this.root = replacement;
      } else if (node === node.parent.Left) {
        node.parent.Left = replacement;
      } else if (node === node.parent.right) {
        node.parent.right = replacement;
      }
      this.afterRemove(node);
    } else if (node.parent === null) {
      //node是叶子节点且是根节点
      this.root = null;
      this.afterRemove(node);
    } else {
      //node是叶子节点但不是根节点
      if (node === node.parent.Left) {
        node.parent.Left = null;
      } else {
        node.parent.right = null;
      }
      this.afterRemove(node);
    }
  }
  //外部使用元素删除节点
  remove(element: E): void {
    this.removeNode(this.findNode(element));
  }
  protected createNode(element: E, parent: Node<E>): Node<E> {
    return new Node<E>(element, parent);
  }

  contains(element: E): boolean {
    return this.findNode(element) !== null;
  }
  //返回值为0，代表e1和e2相等，小于0代表e1<e2大于0代表e1>e2
  private compareTo(e1: E, e2: E): number {
    if (this.compare) {
      return this.compare(e1, e2);
    } else {
      return (e1 as any).compare(e2);
    }
  }
  //element不能为空
  private elementNotNullCheck<E>(element: E) {
    if (element === null) throw new Error('element不能为空');
  }
}
let arr = [7, 4, 9, 2, 5];

// const BST2 = new BrinarySearchTree((e1: number, e2: number) => {
//   return e1 - e2;
// });
// arr.forEach((item) => {
//   BST2.add(item);
// });
// BST2.remove(4);
// console.log(BST2);

export default BrinarySearchTree;
