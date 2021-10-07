import { UnionFind } from './UnionFind';
//并查集  快速查找版
class UnionFind_QF extends UnionFind {
  //查找v所属的集合(根节点)
  find(v: number) {
    this.rangeCheck(v);
    return this.parents[v];
  }
  //合并两个集合
  union(v1: number, v2: number) {
    let p1 = this.find(v1);
    let p2 = this.find(v2);
    if (p1 === p2) return;
    for (let i = 0; i < this.parents.length; i++) {
      if (this.parents[i] === p1) {
        this.parents[i] = p2;
      }
    }
  }
}
