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
    throw new Error('Method not implemented.');
  }
  removeEdge(from: V, to: V) {
    let fromVertex = this.vertices.get(from);
    if (fromVertex === null) return;
    let toVertex = this.vertices.get(to);
    if (toVertex === null) return;

    const edge = new Edge(fromVertex, toVertex);
    let hasSame = false;
    for (const key of fromVertex.outEdges) {
      if (key.equals(edge)) {
        key.weight = edge.weight;
        hasSame = true;
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
}
