import { UnionFind } from './UnionFind';

//并查集  快速合并版 基于size优化
class UnionFind_QU_S extends UnionFind {
  private sizes: number[];
  constructor(capacity: number) {
    super(capacity);
    this.sizes = new Array(capacity);
    for (let i = 0; i < this.sizes.length; i++) {
      this.sizes[i] = 1;
    }
  }
  //查找v所属的集合(根节点)
  find(v: number) {
    this.rangeCheck(v);
    while (v !== this.parents[v]) {
      v = this.parents[v];
    }
    return v;
  }
  //合并两个集合 将v1的根节点嫁接到v2的根节点上
  union(v1: number, v2: number) {
    let p1 = this.find(v1);
    let p2 = this.find(v2);
    if (p1 === p2) return;
    if (this.sizes[p1] < this.sizes[p2]) {
      this.parents[p1] = p2;
      this.sizes[p2] += this.sizes[p1];
    } else {
      this.parents[p2] = p1;
      this.sizes[p1] += this.sizes[p2];
    }
  }
}
