import { Edge, Graph, Vertex } from './Graph';

export class Listraph<V, E> implements Graph<V, E> {
  //所有顶点
  private vertices: Map<V, Vertex<V, E>>;
  //放着图中所有边
  private edges: Set<Edge<V, E>>;
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
  addEdge(from: V, to: V, weight?: E): void {
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
    const arr: Vertex<V, E>[] = [];
    const set = new Set<Vertex<V, E>>();
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
}
