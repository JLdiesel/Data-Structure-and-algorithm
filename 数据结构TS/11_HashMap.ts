class MapA<K, V> {
  static RED: boolean = false;
  static BLACK: boolean = true;
  size: number;
  private table: MTNode<K, V>[];
  private compare: (n1: K, n2: K) => number;
  //默认容量
  private DEFAULT_CAPACITY = 1 << 4;
  constructor(compare?: (n1: K, n2: K) => number) {
    this.size = 0;
    this.compare = compare;
    this.table = new Array(this.DEFAULT_CAPACITY).fill(null);
  }
  isEmpty() {
    return this.size === 0;
  }
  clear() {
    this.table = new Array(this.DEFAULT_CAPACITY);
    this.size = 0;
  }
  protected createNode(key: K, value: V, parent: MTNode<K, V>): MTNode<K, V> {
    return new MTNode<K, V>(key, value, parent);
  }
  //给节点染色
  private color(node: MTNode<K, V>, color: boolean): MTNode<K, V> {
    if (node === null) return node;
    node.color = color;
    return node;
  }
  //把节点染红
  private red(node: MTNode<K, V>): MTNode<K, V> {
    return this.color(node, MapA.RED);
  }
  //把节点染黑
  private black(node: MTNode<K, V>): MTNode<K, V> {
    return this.color(node, MapA.BLACK);
  }
  //查看是什么颜色
  private colorOf(node: MTNode<K, V>): boolean {
    //如果是null就是黑色，不然就看它内部的颜色的
    return node === null ? MapA.BLACK : node.color;
  }
  //判断是否为黑色
  private isBlack(node: MTNode<K, V>): boolean {
    return this.colorOf(node) === MapA.BLACK;
  }
  //判断是否为红色
  private isRed(node: MTNode<K, V>): boolean {
    return this.colorOf(node) === MapA.RED;
  }
  //左旋转
  rotateLeft(grand: MTNode<K, V>) {
    const parentNode: MTNode<K, V> = grand.right;
    const child: MTNode<K, V> = parentNode.Left;
    grand.right = child;
    parentNode.Left = grand;
    this.afterRotate(grand, parentNode, child);
  }
  //右旋转
  rotateRight(grand: MTNode<K, V>) {
    const parentNode: MTNode<K, V> = grand.Left;
    const child: MTNode<K, V> = parentNode.right;
    grand.Left = child;
    parentNode.right = grand;
    this.afterRotate(grand, parentNode, child);
  }
  protected afterRotate(
    grand: MTNode<K, V>,
    parentNode: MTNode<K, V>,
    child: MTNode<K, V>
  ) {
    parentNode.parent = grand.parent;
    //grand是root节点
    if (grand.parent === null)
      this.table[this.index(parentNode.key)] = parentNode;
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
  index(key: K): number {
    if (key === null) return 0;
    let hash = this.hashCode(key);

    return (hash ^ (hash >>> 16)) & (this.table.length - 1);
  }
  private hashCode(key: K): number {
    let hashCode = 0;
    switch (typeof key) {
      case 'number':
        if (key % 1 === 0) {
          hashCode = key;
          break;
        }
        const str = key.toString();
        for (let i = 0; i < str.length; i++) {
          hashCode = (hashCode << 5) - hashCode + str.charCodeAt(i);
        }
        break;
      case 'string':
        for (let i = 0; i < key.length; i++) {
          // hashCode=31*hashCode+key.charCodeAt(i)
          hashCode = (hashCode << 5) - hashCode + key.charCodeAt(i);
        }
        break;
      case 'object':
        if (key === null) return 0;
        for (const keys in key) {
          if (key.hasOwnProperty(keys)) {
            hashCode =
              (hashCode << 5) -
              hashCode +
              this.hashCode(key[keys] as unknown as K);
          }
        }
        break;
      default:
        break;
    }
    return hashCode;
  }
  put(key: K, value: V): V {
    let index = this.index(key);

    //取出index位置的红黑树根节点
    let root = this.table[index];
    //添加第一个节点
    if (root === null) {
      root = new MTNode(key, value, null);
      this.table[index] = root;
      this.size++;
      this.afterPut(root);
      return null;
    }
    //添加的不是第一个
    let node: MTNode<K, V> = root;
    let parentNode: MTNode<K, V> = root;
    let result = 0;
    let h1 = key === null ? 0 : this.hashCode(key);
    do {
      //比较器
      result = this.compareTo(key, node.key, h1, node.hash);
      parentNode = node;
      //如果e1>e2，则找到右边
      if (result > 0) {
        node = node.right;
      } else if (result < 0) {
        node = node.Left;
      } else {
        node.key = key;
        const oldValue = node.value;
        node.value = value;
        return oldValue;
      }
    } while (node !== null);
    let newNode: MTNode<K, V> = new MTNode(key, value, parentNode);
    if (result > 0) {
      parentNode.right = newNode;
    } else if (result < 0) {
      parentNode.Left = newNode;
    }
    this.afterPut(newNode);
    this.size++;
    return null;
  }
  afterPut(node: MTNode<K, V>) {
    const parent: MTNode<K, V> = node.parent;
    //如果parent为空，则添加的为根节点
    if (parent === null) {
      this.black(node);
      return;
    }
    //如果父节点为黑色，不需要平衡
    if (this.isBlack(parent)) return;
    //叔父节点
    const uncle: MTNode<K, V> = parent.sibling();
    //祖父节点
    const grand = this.red(parent.parent);
    //如果叔父节点为红色 则上溢
    if (this.isRed(uncle)) {
      this.black(parent);
      this.black(uncle);
      this.afterPut(grand);
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
  /**
   *
   * @param e1
   * @param e2
   * @param h1 e1的hashCode
   * @param h2 e2的hashCode
   * @returns
   */
  private compareTo(e1: K, e2: K, h1: number, h2: number): number {
    if (e1 === e2) {
      return 0;
    } else {
      //比较哈希值
      const result = h1 - h2;
      if (result !== 0) return result;
      //比较原型链
      const proptyes =
        this.hashCode(Object.prototype.toString.call(e1)) -
        this.hashCode(Object.prototype.toString.call(e2));
      if (proptyes !== 0) return proptyes;
    }
    return 0;
  }
  get(key: K) {
    const node: MTNode<K, V> = this.findNode(key);
    return node !== null ? node.value : null;
  }
  private removeNode(node: MTNode<K, V>): V {
    if (node === null) return null;
    this.size--;
    const oldvalue = node.value;
    if (node.hasTwoChild()) {
      //度为2的节点
      //找到前置\后继节点
      // let s: MTNode<K, V> = this.preNode(node);
      let s: MTNode<K, V> = this.nextNode(node);
      //用前置/后继节点替代
      node.value = s.value;
      node.key = s.key;
      //删除后继节点
      node = s;
    }
    //删除node节点(node度必然为0||1)
    //要替代父节点的节点
    let replacement = node.Left != null ? node.Left : node.right;
    let index = this.index(node.key);
    if (replacement !== null) {
      //node是度为1的节点
      //1。更改parent
      replacement.parent = node.parent;
      //2.更改 parent的左或者右节点
      if (node.parent === null) {
        //node是度为1的根节点
        this.table[index] = replacement;
      } else if (node === node.parent.Left) {
        node.parent.Left = replacement;
      } else if (node === node.parent.right) {
        node.parent.right = replacement;
      }
      this.afterRemove(replacement);
    } else if (node.parent === null) {
      //node是叶子节点且是根节点
      this.table[index] = null;
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
    return oldvalue;
  }
  //前驱节点
  private preNode(node: MTNode<K, V>): MTNode<K, V> {
    if (node === null) return null;
    //前驱节点在左子树中,(left.right.right..)
    let p: MTNode<K, V> = node.Left;
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
  private nextNode(node: MTNode<K, V>): MTNode<K, V> {
    if (node === null) return null;
    //前驱节点在左子树中,(left.right.right..)
    let p: MTNode<K, V> = node.right;
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
  //外部使用元素删除节点
  remove(key: K) {
    this.removeNode(this.findNode(key));
  }
  protected afterRemove(node: MTNode<K, V>) {
    if (this.isRed(node)) {
      this.black(node);
      return; //用以取代的node的子节点是红色
    }
    //删除黑色叶子节点
    const parent: MTNode<K, V> = node.parent;
    if (parent === null) return; //删除的是根节点
    const left: boolean = parent.Left === null || node.isLeftChild();
    let sibling: MTNode<K, V> = left ? parent.right : parent.Left;
    if (left) {
      //删除节点在左，兄弟节点在右
      if (this.isRed(sibling)) {
        //兄弟节点是红色
        //转换为兄弟为黑色的情况
        this.black(sibling);
        this.red(parent);
        this.rotateLeft(parent);
        sibling = parent.right;
      } //兄弟为黑色
      if (this.isBlack(sibling.Left) && this.isBlack(sibling.right)) {
        //兄弟没有一个红色字节点  父节点向下合并
        const parentIsBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentIsBlack) {
          this.afterRemove(parent);
        }
      } else {
        //兄弟节点至少有一个红色字节点 向兄弟节点借元素
        if (this.isBlack(sibling.right)) {
          //如果左边是黑色证明右边是红色
          //把右边为红色的情况转换为左边为红色的情况统一处理
          this.rotateRight(sibling);
          sibling = sibling.parent;
        }
        this.color(sibling, this.colorOf(parent));
        this.black(parent);
        this.black(sibling.right);
        this.rotateLeft(parent);
      }
    } else {
      //删除节点在右，兄弟节点在左
      if (this.isRed(sibling)) {
        //兄弟节点是红色
        //转换为兄弟为黑色的情况
        this.black(sibling);
        this.red(parent);
        this.rotateRight(parent);
        sibling = parent.Left;
      } //兄弟为黑色
      if (this.isBlack(sibling.Left) && this.isBlack(sibling.right)) {
        //兄弟没有一个红色字节点  父节点向下合并
        const parentIsBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentIsBlack) {
          this.afterRemove(parent);
        }
      } else {
        //兄弟节点至少有一个红色字节点 向兄弟节点借元素
        if (this.isBlack(sibling.Left)) {
          //如果左边是黑色证明右边是红色
          //把右边为红色的情况转换为左边为红色的情况统一处理
          this.rotateLeft(sibling);
          sibling = sibling.parent;
        }
        this.color(sibling, this.colorOf(parent));
        this.black(parent);
        this.black(sibling.Left);
        this.rotateLeft(parent);
      }
    }
  }
  containsKey(key: K) {
    return this.findNode(key) !== null;
  }
  containsValue(value: V) {
    if (this.size === 0) return false;
    const arr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] === null) continue;
      arr.push(this.table[i]);
      while (arr.length) {
        const node: MTNode<K, V> = arr.pop();
        if (node.value === value) return true;
        if (node.Left) {
          arr.push(node.Left);
        }
        if (node.right) {
          arr.push(node.right);
        }
      }
    }
  }
  traversal() {
    if (this.size === 0) return false;
    const arr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] === null) continue;
      arr.push(this.table[i]);
      while (arr.length) {
        const node: MTNode<K, V> = arr.pop();
        console.log(node.key, node.value);
        if (node.Left) {
          arr.push(node.Left);
        }
        if (node.right) {
          arr.push(node.right);
        }
      }
    }
  }
  private findNode(key: K): MTNode<K, V> {
    //取出index位置的红黑树根节点
    let node = this.table[this.index(key)];
    let hash = this.hashCode(key);
    while (node != null) {
      let cmp = this.compareTo(key, node.key, hash, node.hash);
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
}
class MTNode<K, V> {
  key: K;
  value: V;
  hash: number;
  color: boolean;
  Left: MTNode<K, V>;
  right: MTNode<K, V>;
  parent: MTNode<K, V> | null;
  constructor(key: K, value: V, parent: MTNode<K, V> | null) {
    this.parent = parent;
    this.Left = null;
    this.right = null;
    this.color = MapA.RED;
    this.key = key;
    this.value = value;
    this.hash = key === null ? 0 : this.hashCode(key);
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

  private hashCode(key: K): number {
    let hashCode = 0;
    switch (typeof key) {
      case 'number':
        if (key % 1 === 0) {
          hashCode = key;
          break;
        }
        const str = key.toString();
        for (let i = 0; i < str.length; i++) {
          hashCode = (hashCode << 5) - hashCode + str.charCodeAt(i);
        }
        break;
      case 'string':
        for (let i = 0; i < key.length; i++) {
          // hashCode=31*hashCode+key.charCodeAt(i)
          hashCode = (hashCode << 5) - hashCode + key.charCodeAt(i);
        }
        break;
      case 'object':
        if (key === null) return 0;
        for (const keys in key) {
          if (key.hasOwnProperty(keys)) {
            hashCode =
              (hashCode << 5) -
              hashCode +
              this.hashCode(key[keys] as unknown as K);
          }
        }
        break;
      default:
        break;
    }
    return hashCode;
  }
  sibling(): MTNode<K, V> {
    if (this.isLeftChild()) {
      return this.parent.right;
    }
    if (this.isRightChild()) {
      return this.parent.Left;
    }

    return null;
  }
  //根据一个元素查找对应节点
}

export default MapA;
