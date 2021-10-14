import { Edge, Graph, Vertex } from './Graph';
import BH from '../12-BinaryHeap';
import { UnionFind } from './UnionFind';
export class Listraph<V> implements Graph<V> {
  //所有顶点
  private vertices: Map<V, Vertex<V>>;
  //放着图中所有边
  private edges: Set<Edge<V>>;
  edgesSize(): number {
    return this.edges.size;
  }
  verticesSize(): number {
    return this.vertices.size;
  }
  addVertex(v: V): void {
    if (this.vertices.has(v)) return;
    this.vertices.set(v, new Vertex(v));
  }
  addEdge(from: V, to: V, weight?: number): void {
    let fromVertex = this.vertices.get(from);
    if (fromVertex === null) {
      fromVertex = new Vertex(from);
      this.vertices.set(from, fromVertex);
    }
    let toVertex = this.vertices.get(to);
    if (toVertex === null) {
      toVertex = new Vertex(to);
      this.vertices.set(to, toVertex);
    }
    const edge = new Edge(fromVertex, toVertex, weight);
    let hasSame = false;
    for (const key of fromVertex.outEdges) {
      if (key.equals(edge)) {
        key.weight = edge.weight;
        hasSame = true;
        toVertex.inEdges.delete(key);
        toVertex.inEdges.add(key);
        break;
      }
    }
    for (const key of toVertex.inEdges) {
      if (key.equals(edge)) {
        key.weight = edge.weight;
        hasSame = true;
        break;
      }
    }
    if (!hasSame) {
      fromVertex.outEdges.add(edge);
      toVertex.inEdges.add(edge);
      this.edges.add(edge);
    }
  }
  removeVertex(v: V): void {
    let vertex = this.vertices.get(v);
    if (vertex === null) return;
    this.vertices.delete(v);
    for (const key of vertex.inEdges) {
      for (const okey of key.to.outEdges) {
        if (okey.equals(key)) {
          key.to.outEdges.delete(okey);
        }
      }
    }
    for (const key of vertex.outEdges) {
      for (const okey of key.to.inEdges) {
        if (okey.equals(key)) {
          key.to.inEdges.delete(okey);
        }
      }
    }
    for (const edge of this.edges) {
      if (edge.from === vertex || edge.to === vertex) {
        this.edges.delete(edge);
      }
    }
    console.log(this.edges);
    console.log(this.vertices);
  }
  removeEdge(from: V, to: V) {
    let fromVertex = this.vertices.get(from);
    if (fromVertex === null) return;
    let toVertex = this.vertices.get(to);
    if (toVertex === null) return;

    const edge = new Edge(fromVertex, toVertex);
    for (const key of fromVertex.outEdges) {
      if (key.equals(edge)) {
        fromVertex.outEdges.delete(key);
        toVertex.inEdges.delete(key);
        this.edges.delete(key);
        break;
      }
    }
  }
  //广度优先
  bfs(begin: V) {
    const beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;
    const arr: Vertex<V>[] = [];
    const set = new Set<Vertex<V>>();
    arr.push(beginVertex);
    set.add(beginVertex);
    while (arr.length) {
      let vertex = arr.shift();
      console.log(vertex.value);
      set.add(vertex);
      for (const edge of vertex.outEdges) {
        if (set.has(edge.to)) continue;
        arr.push(edge.to);
        set.add(edge.to);
      }
    }
  }
  //深度优先(递归)
  dfs(begin: V) {
    const beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;
    const set = new Set<Vertex<V>>();
    set.add(beginVertex);
    this.dfsMain(beginVertex, set);
  }
  dfsMain(vertex: Vertex<V>, set: Set<Vertex<V>>) {
    console.log(vertex.value);
    set.add(vertex);
    for (const edge of vertex.outEdges) {
      if (set.has(edge.to)) continue;
      this.dfsMain(edge.to, set);
    }
  }
  //深度优先(非递归)
  dfs2(begin: V) {
    const beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;
    //保存遍历过的节点
    const set = new Set<Vertex<V>>();
    //保存所有节点
    const stack: Vertex<V>[] = [];
    stack.push(beginVertex);
    set.add(beginVertex);
    console.log(beginVertex.value);
    while (stack.length) {
      let vertex = stack.pop();
      for (const edge of vertex.outEdges) {
        if (set.has(edge.to)) continue;
        // stack.push(vertex);
        //把from和to都添加到栈中方便回溯
        stack.push(edge.from);
        stack.push(edge.to);
        set.add(edge.to);
        console.log(edge.to.value);
        break;
      }
    }
  }
  //拓扑排序
  topologicalSort() {
    const list: V[] = [];
    const queue: Vertex<V>[] = [];
    const map: Map<Vertex<V>, number> = new Map();
    this.vertices.forEach((item) => {
      const insize = item.inEdges.size;
      if (insize === 0) {
        queue.push(item);
      } else {
        map.set(item, insize);
      }
    });
    //初始化，将度为0的节点都放入队列
    while (!queue.length) {
      let vertex = queue.shift();
      //放入度为0的节点
      list.push(vertex.value);
      //将入度为0的节点的后驱活动的度-1
      //如果-1后活动的度为0，则加入到遍历队列
      for (const edge of vertex.outEdges) {
        let toIn = map.get(edge.to) - 1;
        if (toIn === 0) {
          queue.push(edge.to);
        } else {
          map.set(edge.to, toIn);
        }
      }
    }
  }
  mst(): Set<Edge<V>> {
    return this.prim();
  }
  mst2(): Set<Edge<V>> {
    return this.kruskal();
  }
  //prim算法，返回最优路径(权重最小)  切分算法
  private prim(): Set<Edge<V>> {
    const it = this.vertices.values();
    if (!it.next().value) return;
    //拿到随机顶点
    const vertex: Vertex<V> = this.vertices.values().next().value;

    //经过的线的集合
    const edgeSet: Set<Edge<V>> = new Set();
    //已经遍历过的点的集合
    const verticesSet: Set<Vertex<V>> = new Set();
    verticesSet.add(vertex);
    //小顶堆 根据权值排序，权值最小的排最前
    const heap = new BH<Edge<V>>(
      (a, b) => b.compareTo(a),
      [...vertex.outEdges]
    );
    //循环判断条件 线的数量为节点数量-1
    const edgeSize = this.vertices.size - 1;
    while (!heap.isEmpty() && edgeSet.size < edgeSize) {
      //取出weight最小的线
      const edge = heap.remove();
      //如果该线指向已经遍历过的点，则进入下一次循环
      if (verticesSet.has(edge.to)) continue;
      //添加权值最小的线
      edgeSet.add(edge);
      //添加已遍历过的点
      verticesSet.add(edge.to);
      //把该次新增遍历的点的线加入到堆中
      for (const edges of edge.to.outEdges) {
        heap.add(edges);
      }
    }
    return edgeSet;
  }
  //按照边的权重顺序将边加入生成树，直到生成树中含有v-1条边为止
  //若加入该边会与生成树形成环，则不加入该边
  //从第三条边开始，可能会与生成树形成环
  private kruskal(): Set<Edge<V>> {
    const edgeSize = this.vertices.size - 1;
    if (edgeSize === -1) return null;
    //把所有的边批量建堆
    const heap = new BH<Edge<V>>((a, b) => b.compareTo(a), [...this.edges]);
    //经过的线的集合
    const edgeSet: Set<Edge<V>> = new Set();
    const uf = new UnionFind<Vertex<V>>();
    this.vertices.forEach((v, k) => {
      uf.makeSet(v);
    });

    while (!heap.isEmpty() && edgeSet.size < edgeSize) {
      const edge = heap.remove();
      //判断两个点是否在一个集合内 如果构成环就跳过循环
      if (uf.isSame(edge.from, edge.to)) continue;
      edgeSet.add(edge);
      //把两个点连接到同一个并查集
      uf.union(edge.from, edge.to);
    }
    return edgeSet;
  }
}
