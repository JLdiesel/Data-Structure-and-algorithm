import { UnionFind } from './UnionFind';

//并查集  快速合并版
class UnionFind_QU extends UnionFind {
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
    this.parents[p1] = p2;
  }
}
