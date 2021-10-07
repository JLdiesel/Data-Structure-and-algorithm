//并查集  快速查找版
export class UnionFind {
  protected parents: number[];
  constructor(capacity: number) {
    if (capacity < 0) {
      throw new Error('容量不能小于0');
    }
    this.parents = new Array(capacity);
    for (let i = 0; i < this.parents.length; i++) {
      this.parents[i] = i;
    }
  }
  //查找v所属的集合(根节点)
  find(v: number) {}
  //合并两个集合
  union(v1: number, v2: number) {}
  //查看两个元素是否属于同一个集合
  protected isSame(v1: number, v2: number) {}
  protected rangeCheck(v: number) {
    if (v < 0 || v >= this.parents.length) {
      throw new Error('下标越界');
    }
  }
}
