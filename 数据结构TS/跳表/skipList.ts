export class SkipList<K, V> {
  private _size: number = 0;
  private compareator: (k2: K, k1: K) => number;
  static p = 0.25;
  //最大层数
  static MAX_LEVEL = 32;
  //有效层数
  private level = 3;
  //不存放任何KV
  private first: Node<K, V>;
  constructor(compareator: (k2: K, k1: K) => number) {
    this.compareator = compareator;
    this.first = new Node(null, null, SkipList.MAX_LEVEL);
    this.first.nexts = new Array(SkipList.MAX_LEVEL);
    for (let i = 0; i < SkipList.MAX_LEVEL; i++) {
      this.first.nexts[i] = null;
    }
  }

  cmp(k1: K, k2: K) {
    return this.compareator(k1, k2);
  }
  size() {
    return this._size;
  }
  isEmpty() {
    return this._size === 0;
  }
  private randomLevel() {
    let level = 1;
    while (Math.random() < SkipList.p && level < SkipList.MAX_LEVEL) {
      level++;
    }
    return level;
  }
  put(key: K, value: V): V {
    this.keyCheck(key);
    let node = this.first;
    const preNodes: Node<K, V>[] = new Array(this.level);
    for (let i = this.level - 1; i >= 0; i--) {
      let cmp = -1;
      while (
        node.nexts[i] !== null &&
        (cmp = this.cmp(key, node.nexts[i].key)) > 0
      ) {
        node = node.nexts[i];
      }
      //node.nexts[i].key>=key
      if (cmp === 0) {
        //节点本身存在
        const oldVal = node.nexts[i].value;
        node.nexts[i].value = value;
        return oldVal;
      }
      preNodes[i] = node;
    }
    let newLevel = this.randomLevel();
    //此时的node就是前驱节点
    const newNode = new Node(key, value, newLevel);

    for (let i = 0; i < newLevel; i++) {
      if (i >= this.level) {
        this.first.nexts[i] = newNode;
      } else {
        newNode.nexts[i] = preNodes[i].nexts[i];
        preNodes[i].nexts[i] = newNode;
      }
    }
    //节点数量增加
    this._size++;
    //计算跳表的最终层数
    this.level = Math.max(this.level, newLevel);
    return;
  }
  get(key: K): V {
    this.keyCheck(key);
    //first.nexts[3]===8节点
    //first.nexts[2]===4节点
    //first.nexts[1]===2节点
    //first.nexts[0]===1节点
    //first.nexts[k]===2^k节点
    let node = this.first;

    for (let i = this.level - 1; i >= 0; i--) {
      let cmp = -1;
      while (
        node.nexts[i] !== null &&
        (cmp = this.cmp(key, node.nexts[i].key)) > 0
      ) {
        node = node.nexts[i];
      }
      //node.nexts[i].key>=key
      if (cmp === 0) return node.nexts[i].value;
    }
    return null;
  }
  remove(key: K): V {
    this.keyCheck(key);
    let node = this.first;
    let preNodes: Node<K, V>[] = [];
    let exist = false;
    for (let i = this.level - 1; i >= 0; i--) {
      let cmp = -1;
      while (
        node.nexts[i] !== null &&
        (cmp = this.cmp(key, node.nexts[i].key)) > 0
      ) {
        node = node.nexts[i];
      }
      preNodes.push(node);
      if (cmp === 0) exist = true;
    }
    if (!exist) {
      return null;
    }
    //需要被删除的节点
    const removeNode = node.nexts[0];
    for (let i = 0; i < removeNode.nexts.length; i++) {
      preNodes[i].nexts[i] = removeNode.nexts[i];
    }
    //更新跳表的层数
    let newLevel = this.level;
    while (--newLevel >= 0 && this.first.nexts[newLevel] === null) {
      this.level = newLevel;
    }
    //节点数量增加
    this._size--;
    return removeNode.value;
  }
  private keyCheck(key: K) {
    if (key === null || key === undefined) {
      throw new Error('key must not be null');
    }
  }
}
class Node<K, V> {
  key: K;
  value: V;
  nexts: Node<K, V>[];
  constructor(key?: K, value?: V, level?: number) {
    this.value = value;
    this.key = key;
    this.nexts = new Array(level);
    for (let i = 0; i < level; i++) {
      this.nexts[i] = new Node();
    }
  }
}
export {};
