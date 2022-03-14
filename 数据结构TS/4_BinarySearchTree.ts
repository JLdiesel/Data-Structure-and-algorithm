class STNode<E> {
  element: E;
  Left: STNode<E>;
  right: STNode<E>;
  parent: STNode<E> | null;
  constructor(element: E, parent: STNode<E> | null) {
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
}
class BrinarySearchTree<E> {
  private size: number;
  private root: STNode<E>;
  private compare: (n1: E, n2: E) => number;
  constructor(compare?: (n1: E, n2: E) => number) {
    this.size = 0;
    this.root = null;
    this.compare = compare;
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
  //前驱节点  predecessor
  preNode(node: STNode<E>): STNode<E> {
    if (node === null) return null;
    //前驱节点在左子树中,(left.right.right..)
    let p: STNode<E> = node.Left;
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
  //后继节点 successor
  nextNode(node: STNode<E>): STNode<E> {
    if (node === null) return null;
    //前驱节点在左子树中,(left.right.right..)
    let p: STNode<E> = node.right;
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
    const arr: Array<STNode<E>> = [];
    let leaf: boolean = false;
    let node: STNode<E>;
    arr.push(this.root);
    while (arr.length !== 0) {
      node = arr.shift();
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
          let node: STNode<E>
          let leaf: boolean = false
          const arr: Array<STNode<E>> = []
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
  private getNodeHeight(node: STNode<E>): number {
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
    let node: STNode<E>;
    let levelSize: number = 1;
    const arr: Array<STNode<E>> = [];
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

  //添加子节点
  add(element: E): void {
    this.elementNotNullCheck(element);
    //添加第一个节点
    if (this.root === null) {
      this.root = new STNode(element, null);
      this.size++;

      return;
    }
    //添加的不是第一个
    let node: STNode<E> = this.root;
    let parentNode: STNode<E> = this.root;
    let result = 0;
    //查找到要添加节点的父节点
    while (node !== null) {
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
    //创建新节点
    let newNode: STNode<E> = new STNode(element, parentNode);
    //判断新节点在父节点的左还是右
    if (result > 0) {
      parentNode.right = newNode;
    } else if (result < 0) {
      parentNode.Left = newNode;
    }
    this.size++;
  }
  //Morris中序遍历
  morris() {
    let node = this.root;
    while (node) {
      if (node.Left) {
        //找到前驱节点  node.left是不为空的
        let prevNode = node.Left;
        while (prevNode.right && prevNode.right !== node) {
          prevNode = prevNode.right;
        }
        if (!prevNode.right) {
          prevNode.right = node;
          node = node.Left;
        }
        if (prevNode.right === node) {
          prevNode.right = null;
          console.log(node.element);
          node = node.right;
        }
      } else {
        console.log(node.element);
        node = node.right;
      }
    }
  }
  //前序遍历
  preorderTravsersal1(fn: (element: E) => void): void {
    this.preorderTravsersal(this.root, fn);
  }
  private preorderTravsersal(node: STNode<E>, fn: (element) => void): void {
    if (node === null) return;
    fn(node.element);
    this.preorderTravsersal(node.Left, fn);
    this.preorderTravsersal(node.right, fn);
  }

  //中序遍历
  inorderTravsersal1(fn: (element: E) => void): void {
    this.inorderTravsersal(this.root, fn);
  }
  private inorderTravsersal(node: STNode<E>, fn: (element) => void): void {
    if (node === null) return;
    this.inorderTravsersal(node.Left, fn);
    fn(node.element);
    this.inorderTravsersal(node.right, fn);
  }
  //后序遍历
  postorderTravsersal1(fn: (element: E) => void): void {
    this.postorderTravsersal(this.root, fn);
  }
  private postorderTravsersal(node: STNode<E>, fn: (element) => void): void {
    if (node === null) return;

    this.postorderTravsersal(node.Left, fn);
    this.postorderTravsersal(node.right, fn);
    fn(node.element);
  }
  //层序遍历
  LevelOrderTravsersal(fn: (element: E) => void): void {
    if (this.root === null) return;
    let node: STNode<E>;
    const arr: Array<STNode<E>> = [];
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
  //前序遍历（非递归2）
  preorder2(fn: (element: E) => void) {
    if (!fn || this.root === null) return;
    const arr: STNode<E>[] = [];
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
        arr.push(node);
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
    const arr: STNode<E>[] = [];
    let preNode: STNode<E>;
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

  //根据一个元素查找对应节点
  private findNode(element: E): STNode<E> {
    let node: STNode<E> = this.root;
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
  //根据节点删除
  private removeNode(node: STNode<E>): void {
    if (node === null) return;

    this.size--;

    if (node.hasTwoChild()) {
      //度为2的节点
      //找到前置\后继节点
      // let s: STNode<E> = this.preNode(node);
      let s: STNode<E> = this.nextNode(node);
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
    } else if (node.parent === null) {
      //node是叶子节点且是根节点
      this.root = null;
    } else {
      //node是叶子节点但不是根节点
      if (node === node.parent.Left) {
        node.parent.Left = null;
      } else {
        node.parent.right = null;
      }
    }
  }
  //外部使用元素删除节点
  remove(element: E): void {
    this.removeNode(this.findNode(element));
  }

  //树中是否有此元素的节点
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
class Person {
  age: number;
  constructor(age) {
    this.age = age;
  }
  compare(e: Person) {
    return this.age - e.age;
  }
}
class Children {
  age: number;
  constructor(age: number) {
    this.age = age;
  }
  compare(e: Children) {
    return this.age - e.age;
  }
}
let arr = [7, 4, 9, 2, 5];

const BST3 = new BrinarySearchTree((e1: number, e2: number) => {
  return e1 - e2;
});
arr.forEach((item) => {
  BST3.add(item);
});
console.log(BST3);

// const BST = new BrinarySearchTree<Person>();
/* arr.forEach(item => {
    BST.add(new Person(item))
}) */
/* 
const BST3 = new BrinarySearchTree();
arr.forEach(item => {
    BST3.add(new Children(item))
})
const childrenItem = new Children(8)
BST3.add(childrenItem)
console.log(BST3.getsize());

BST3.remove(childrenItem)
console.log(BST3.getsize()); */

// console.log(BST3.isComplete());

BST3.preorderTravsersal1((item) => {
  console.log(item);
});
console.log('前序结束');

BST3.postorderTravsersal1((item) => {
  console.log(item);
});
console.log('后序结束');

BST3.inorderTravsersal1((item) => {
  console.log(item);
});
console.log('中序结束');

BST3.LevelOrderTravsersal((item) => {
  console.log(item);
});
console.log('层序结束');
BST3.morris();

export default BrinarySearchTree;
