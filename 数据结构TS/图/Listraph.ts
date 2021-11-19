import { Edge, Graph, PathInfo, Vertex } from './Graph';
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
    if (!beginVertex) return null;
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
    if (!beginVertex) return null;
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
    if (!beginVertex) return null;
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
    //用并查集实现
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

  //最短路径查询算法 Dijkstra 单源最短路径算法  不能有负权边
  shortestPath(begin: V): Map<V, number> {
    const beginVertex = this.vertices.get(begin);
    if (!beginVertex) return null;
    //还没找到最短路径的集合
    const paths: Map<Vertex<V>, number> = new Map();
    //已经找到最短路径的集合
    const selectedPaths: Map<V, number> = new Map();
    //初始化paths  把初始节点的所有向外的边都加入到paths
    for (const edge of beginVertex.outEdges) {
      paths.set(edge.to, edge.weight);
    }
    while (paths.size) {
      const minEntry = this.getMinPath(paths);
      //minEntry离开桌面
      const minVertex = minEntry.vertex;
      selectedPaths.set(minVertex.value, minEntry.weight);
      paths.delete(minVertex);
      //对minVertex的outEndges进行松弛操作
      for (const edge of minVertex.outEdges) {
        //如果edge.to离开地面 则不需要比较
        if (selectedPaths.get(edge.to.value) || edge.to.value === begin)
          continue;
        //以前的最短路径：beginVertex到edge.to的最短路径
        const oldVertexNum = paths.get(edge.to) || null;
        //新的可选择的最短路径：begeinVertex到edge.from的最短路径+edge.weight
        const newVertexNum = minEntry.weight + edge.weight;
        if (oldVertexNum === null || oldVertexNum > newVertexNum) {
          paths.set(edge.to, newVertexNum);
        }
      }
    }
    // selectedPaths.delete(begin)

    return selectedPaths;
  }
  //从paths中挑一条最小的路径出来
  getMinPath(paths: Map<Vertex<V>, number>): {
    vertex: Vertex<V>;
    weight: number;
  } {
    let minVertex: Vertex<V> = null;
    let minWeight: number = null;
    for (const item of paths.entries()) {
      if (item[1] < minWeight || minWeight === null) {
        minWeight = item[1];
        minVertex = item[0];
      }
    }
    return {
      vertex: minVertex,
      weight: minWeight,
    };
  }
  //最短路径查询算法 Dijkstra 能打印出路径点
  shortestPath2(begin: V): Map<V, PathInfo<V>> {
    const beginVertex = this.vertices.get(begin);
    if (!beginVertex) return null;
    //还没找到最短路径的集合
    const paths: Map<Vertex<V>, PathInfo<V>> = new Map();
    //已经找到最短路径的集合
    const selectedPaths: Map<V, PathInfo<V>> = new Map();
    //把初始化的逻辑放到relax里
    paths.set(beginVertex, new PathInfo(0));

    //初始化paths  把初始节点的所有向外的边都加入到paths
    /* for (const edge of beginVertex.outEdges) {
      const pathInfo = new PathInfo<V>(edge.weight);
      pathInfo.list.push(edge);
      paths.set(edge.to, pathInfo);
    } */
    while (paths.size) {
      const minEntry = this.getMinPath2(paths);
      //minEntry离开桌面
      const minVertex = minEntry.vertex;
      selectedPaths.set(minVertex.value, minEntry.pathInfo);
      paths.delete(minVertex);
      const fromPath = minEntry.pathInfo;
      //对minVertex的outEndges进行松弛操作
      for (const edge of minVertex.outEdges) {
        //如果edge.to离开地面 则不需要比较
        if (selectedPaths.get(edge.to.value) || edge.to.value === begin)
          continue;
        //松弛操作
        this.relax(edge, fromPath, paths);
      }
    }
    // selectedPaths.delete(begin)

    return selectedPaths;
  }
  /**
   *
   * @param edge 需要松弛的边
   * @param fromPath edge的from的最短路径信息
   * @param paths 没有离开桌面的点的集合
   * @returns
   */
  relax(
    edge: Edge<V>,
    fromPath: PathInfo<V>,
    paths: Map<Vertex<V>, PathInfo<V>>
  ) {
    //以前的最短路径：beginVertex到edge.to的最短路径
    let oldPath = paths.get(edge.to) || null;
    const oldVertexNum = oldPath?.weight || null;
    //新的可选择的最短路径：begeinVertex到edge.from的最短路径+edge.weight
    const newVertexNum = fromPath.weight + edge.weight;
    if (oldVertexNum !== null && oldVertexNum <= newVertexNum) return;
    if (oldVertexNum === null) {
      oldPath = new PathInfo<V>(newVertexNum);
      paths.set(edge.to, oldPath);
    }
    // const begin = paths.get(edge.to);
    oldPath.weight = newVertexNum;
    // newPathInfo.list.push(edge);
    //先将之前的路径加进去
    const prePath = fromPath;
    //再加现在的
    oldPath.list = [...prePath.list].concat(edge);
  }
  getMinPath2(paths: Map<Vertex<V>, PathInfo<V>>): {
    vertex: Vertex<V>;
    pathInfo: PathInfo<V>;
  } {
    let minVertex: Vertex<V> = null;
    let minWeight: PathInfo<V> = null;
    for (const item of paths.entries()) {
      if (item[1].weight < minWeight.weight || minWeight === null) {
        minWeight.weight = item[1].weight;
        minVertex = item[0];
      }
    }
    return {
      vertex: minVertex,
      pathInfo: minWeight,
    };
  }
  //对所有边都进行v:顶点个数-1次松弛操作
  bellmanFord(begin: V): Map<V, PathInfo<V>> {
    const beginVertex = this.vertices.get(begin);
    if (!beginVertex) return null;
    //已经找到最短路径的集合
    const selectedPaths: Map<V, PathInfo<V>> = new Map();
    selectedPaths.set(begin, new PathInfo(0));
    //顶点个数-1
    const count = this.vertices.size - 1;
    for (let i = 0; i < count; i++) {
      for (const edge of this.edges) {
        const fromPath = selectedPaths.get(edge.from.value);
        if (fromPath === null) continue;
        this.relaxforBellmanFord(edge, fromPath, selectedPaths);
      }
    }
    for (const edge of this.edges) {
      const fromPath = selectedPaths.get(edge.from.value);
      if (fromPath === null) continue;
      //如果还能进行松弛，则证明有负权环
      if (this.relaxforBellmanFord(edge, fromPath, selectedPaths)) {
        return null;
      }
    }
    selectedPaths.delete(begin);
    return selectedPaths;
  }
  /**
   *
   * @param edge 需要松弛的边
   * @param fromPath edge的from的最短路径信息
   * @param paths 桌面的点的集合
   * @returns
   */
  relaxforBellmanFord(
    edge: Edge<V>,
    fromPath: PathInfo<V>,
    paths: Map<V, PathInfo<V>>
  ) {
    //以前的最短路径：beginVertex到edge.to的最短路径
    let oldPath = paths.get(edge.to.value) || null;
    const oldVertexNum = oldPath?.weight || null;
    //新的可选择的最短路径：begeinVertex到edge.from的最短路径+edge.weight
    const newVertexNum = fromPath.weight + edge.weight;
    if (oldVertexNum !== null && oldVertexNum <= newVertexNum) return false;
    if (oldVertexNum === null) {
      oldPath = new PathInfo<V>(newVertexNum);
      paths.set(edge.to.value, oldPath);
    }
    // const begin = paths.get(edge.to);
    oldPath.weight = newVertexNum;
    // newPathInfo.list.push(edge);
    //先将之前的路径加进去
    const prePath = fromPath;
    //再加现在的
    oldPath.list = [...prePath.list].concat(edge);
    return true;
  }
  //Floyd o(V3)  多源最短路径算法  求出任意两个顶点之间的最短路径
  //假设dist(i,j)为顶点i到顶点j的最短路径
  //对于每个顶点K，检查dist(i,k)+dist(k,j)<dist(i,j)是否成立
  //如果成立，则证明i到k再到j的路径比i直接到j的路径短，则dist(i,j)=dist(i,k)+dist(k,j)
  shortestPathFloyd(): Map<V, Map<V, PathInfo<V>>> {
    const paths: Map<V, Map<V, PathInfo<V>>> = new Map();
    //初始化操作
    for (const edge of this.edges) {
      //拿出from点对应的map
      let map: Map<V, PathInfo<V>> = paths.get(edge.from.value);
      if (map === null) {
        //如果没有则新建一个map
        map = new Map<V, PathInfo<V>>();
        //并把map和from绑定到paths里面
        paths.set(edge.from.value, map);
      }
      //from到to的pathInfo
      const pathInfo: PathInfo<V> = new PathInfo(edge.weight);
      pathInfo.list.push(edge);
      map.set(edge.to.value, pathInfo);
    }
    this.vertices.forEach((vertex2, v2) => {
      this.vertices.forEach((vertex1, v1) => {
        this.vertices.forEach((vertex3, v3) => {
          if (v1 === v2 || v1 === v3 || v2 === v3) return;
          //v1->v2
          const path12 = paths.get(v1)?.get(v2);
          if (path12 === null) return;
          //v2->v3
          const path23 = paths.get(v2)?.get(v3);
          if (path23 === null) return;
          //v1->v3
          let path13 = paths.get(v1)?.get(v3);
          const newWeight = path12?.weight + path23?.weight;
          const oldWeight = path13?.weight;
          if (path13 !== null && newWeight - oldWeight >= 0) return;
          if (path13 === null) {
            path13 = new PathInfo(0);
            paths.get(v1).set(v3, path13);
          }
          path13.weight = newWeight;
          // newPathInfo.list.push(edge);
          //先将之前的路径加进去
          const prePath1 = path12.list;
          const prePath2 = path23.list;
          //再加现在的
          path13.list = [...prePath1].concat(prePath2);
          return true;
        });
      });
    });
    return paths;
  }
}
