import Node from './TreeNode';

class BrinaryTree<E> {
  protected size: number;
  protected root: Node<E>;
  constructor() {
    this.size = 0;
    this.root = null;
  }
  getsize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  clear(): void {
    this.root = null;
    this.size = 0;
  }
  preorder2(fn: (element: E) => void) {
    if (!fn || this.root === null) return;
    const arr: Node<E>[] = [];
    arr.push(this.root);
    while (arr.length) {
      const node = arr.pop();
      fn(node.element);
      if (node.right) {
        arr.push(node.right);
      }
      if (node.Left) {
        arr.push(node.Left);
      }
    }
  }
  //前序遍历(非递归)
  preorder(fn: (element: E) => void) {
    if (!fn || this.root === null) return;
    const arr = [];
    let node = this.root;
    while (true) {
      if (node !== null) {
        fn(node.element);
        if (node.right !== null) {
          arr.push(node.right);
        }
        node = node.Left;
      } else if (arr.length === 0) {
        return;
      } else {
        node = arr.pop();
      }
    }
  }
  //中序遍历
  inorder(fn: (element: E) => void) {
    if (!fn || this.root === null) return;
    const arr = [];
    let node = this.root;
    while (true) {
      if (node !== null) {
        arr.push(node.right);
        node = node.Left;
      } else if (arr.length === 0) {
        return;
      } else {
        node = arr.pop();
        fn(node.element);
        node = node.right;
      }
    }
  }
  //后序遍历
  postorder(fn: (element: E) => void) {
    if (!fn || this.root === null) return;
    const arr: Node<E>[] = [];
    let preNode: Node<E>;
    arr.push(this.root);
    while (arr.length) {
      let top = arr[arr.length - 1];
      if (top.isLeaf() || (preNode && preNode.parent === top)) {
        preNode = arr.pop();
        fn(preNode.element);
      } else {
        if (top.right !== null) {
          arr.push(top.right);
        }
        if (top.Left !== null) {
          arr.push(top.Left);
        }
      }
    }
  }
  //前序遍历
  preorderTravsersal1(fn: (element) => void): void {
    this.preorderTravsersal(this.root, fn);
  }
  private preorderTravsersal(node: Node<E>, fn: (element) => void): void {
    if (node === null) return;
    fn(node.element);
    this.preorderTravsersal(node.Left, fn);
    this.preorderTravsersal(node.right, fn);
  }

  //中序遍历
  inorderTravsersal1(fn: (element: E) => void): void {
    this.inorderTravsersal(this.root, fn);
  }
  private inorderTravsersal(node: Node<E>, fn: (element) => void): void {
    if (node === null) return;
    this.inorderTravsersal(node.Left, fn);
    fn(node.element);
    this.inorderTravsersal(node.right, fn);
  }
  //后序遍历
  postorderTravsersal1(fn: (element: E) => void): void {
    this.postorderTravsersal(this.root, fn);
  }
  private postorderTravsersal(node: Node<E>, fn: (element: E) => void): void {
    if (node === null) return;
    this.postorderTravsersal(node.Left, fn);
    this.postorderTravsersal(node.right, fn);
    fn(node.element);
  }
  //层序遍历
  LevelOrderTravsersal(fn: (element: E) => void): void {
    if (this.root === null) return;
    let node: Node<E>;
    const arr: Array<Node<E>> = [];
    arr.push(this.root);
    while (arr.length !== 0) {
      node = arr.shift();
      fn(node.element);
      if (node.Left) {
        arr.push(node.Left);
      }
      if (node.right) {
        arr.push(node.right);
      }
    }
  }
  //前驱节点
  preNode(node: Node<E>): Node<E> {
    if (node === null) return null;
    //前驱节点在左子树中,(left.right.right..)
    let p: Node<E> = node.Left;
    if (p !== null) {
      while (p.right !== null) {
        p = p.right;
      }
      return p;
    }
    //从父、祖父节点中寻找
    while (node.parent !== null && node === node.parent.Left) {
      node = node.parent;
    }
    return node.parent;
  }
  //后继节点
  nextNode(node: Node<E>): Node<E> {
    if (node === null) return null;
    //前驱节点在左子树中,(left.right.right..)
    let p: Node<E> = node.right;
    if (p !== null) {
      while (p.Left !== null) {
        p = p.Left;
      }
      return p;
    }
    //从父、祖父节点中寻找
    while (node.parent !== null && node === node.parent.right) {
      node = node.parent;
    }
    return node.parent;
  }
  //判断是否为完全二叉树 优化版
  isComplete(): boolean {
    if (this.root === null) return false;
    const arr: Array<Node<E>> = [];
    let leaf: boolean = false;
    let node: Node<E>;
    arr.push(this.root);
    while (arr.length !== 0) {
      node = arr.shift();
      //接下来所有节点都必须为叶子节点 如果不是叶子节点则返回false
      if (leaf && !node.isLeaf()) return false;
      if (node.Left !== null) {
        //node.left===null &&node.right!==null
        arr.push(node.Left);
      } else if (node.right !== null) {
        return false;
      }
      if (node.right !== null) {
        arr.push(node.right);
      } else {
        //右边为空 接下来所有节点都必须为叶子节点
        leaf = true;
      }
    }

    return true;
  }

  //判断是否为完全二叉树
  /*   isComplete(): boolean {
          if (this.root === null) return false
          let node: Node<E>
          let leaf: boolean = false
          const arr: Array<Node<E>> = []
          arr.push(this.root)
          while (arr.length !== 0) {
              node = arr.shift()
              if (leaf && !node.isLeaf()) return false
              if (node.hasTwoChild()) {
                  arr.push(node.Left)
                  arr.push(node.right)
              } else if (node.Left === null && node.right !== null) {
                  return false
              } else {
                  leaf = true
                  if (node.Left !== null) {
                      arr.push(node.Left)
                  }
              }
          }
          return true
      } */

  //递归遍历树的高度
  getHeight() {
    return this.getNodeHeight(this.root);
  }
  //
  private getNodeHeight(node: Node<E>): number {
    if (node === null) return 0;
    return (
      1 +
      Math.max(this.getNodeHeight(node.Left), this.getNodeHeight(node.right))
    );
  }
  //层序遍历树的高度
  getHeight2(): number {
    if (this.root === null) return;
    let height: number = 0;
    let node: Node<E>;
    let levelSize: number = 1;
    const arr: Array<Node<E>> = [];
    arr.push(this.root);
    while (arr.length !== 0) {
      levelSize--;
      node = arr.shift();
      if (node.Left) {
        arr.push(node.Left);
      }
      if (node.right) {
        arr.push(node.right);
      }
      if (levelSize === 0) {
        levelSize = arr.length;
        height++;
      }
    }
    return height;
  }
}

export default BrinaryTree;
