//并查集  快速查找泛型版
export class UnionFind<V> {
  private nodes: Map<V, Node<V>>;
  constructor() {
    this.nodes = new Map();
  }
  makeSet2() {
    
  }
  makeSet(v: V) {
    if (this.nodes.get(v)) return;
    this.nodes.set(v, new Node(v));
  }
  findNode(v: V) {
    let node = this.nodes.get(v);
    if (node === null) return null;
    while (!Object.is(node.value, node.parent.value)) {
      node.parent = node.parent.parent;
      node = node.parent;
    }
    return node;
  }
  //查找v所属的集合(根节点)
  find(v: V) {
    return this.findNode(v)?.value;
  }
  //合并两个集合
  union(v1: V, v2: V) {
    let p1 = this.findNode(v1);
    let p2 = this.findNode(v2);
    if (p1.value === p2.value) return;
    if (p1.rank < p2.rank) {
      p1.parent = p2;
    } else if (p1.rank > p2.rank) {
      p2.parent = p1;
    } else {
      p2.parent = p1;
      p1.rank += 1;
    }
  }
  //查看两个元素是否属于同一个集合
  isSame(v1: V, v2: V) {
    return Object.is(this.find(v1), this.find(v2));
  }
}
class Node<V> {
  value: V;
  parent: Node<V>;
  rank: number;
  constructor(v: V) {
    this.value = v;
    this.parent = this;
    this.rank = 1;
  }
}
