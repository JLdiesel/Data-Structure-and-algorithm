import { UnionFind } from './UnionFind';

//并查集  快速合并版 基于树高度优化 路径减半 Path Halving
//使路径上每隔一个节点就指向其祖父节点
class UnionFind_QU_R_PH extends UnionFind {
  private ranks: number[];
  constructor(capacity: number) {
    super(capacity);
    this.ranks = new Array(capacity);
    for (let i = 0; i < this.ranks.length; i++) {
      this.ranks[i] = 1;
    }
  }
  //查找v所属的集合(根节点)
  find(v: number) {
    this.rangeCheck(v);
    while (v !== this.parents[v]) {
      this.parents[v] = this.parents[this.parents[v]];
      v = this.parents[v];
    }
    return v;
  }
  //基于树高度优化合并两个集合
  union(v1: number, v2: number) {
    let p1 = this.find(v1);
    let p2 = this.find(v2);
    if (p1 === p2) return;
    if (this.ranks[p1] < this.ranks[p2]) {
      this.parents[p1] = p2;
    } else if (this.ranks[p1] > this.ranks[p2]) {
      this.parents[p2] = p1;
    } else {
      this.parents[p2] = p1;
      this.ranks[p1] += 1;
    }
  }
}
