export interface Graph<V, E> {
  edgesSize(): number;
  verticesSize(): number;
  addVertex(v: V): void;
  addEdge(from: V, to: V, weight?: E): void;
  removeVertex(v: V): void;
  removeEdge(from: V, to: V);
}
export class Vertex<V, E> {
  value: V;
  inEdges: Set<Edge<V, E>>;
  outEdges: Set<Edge<V, E>>;
  constructor(value: V) {
    this.value = value;
  }
  equals(obj: Vertex<V, E>) {
    return obj.value === this.value;
  }
}
export class Edge<V, E> {
  from: Vertex<V, E>;
  to: Vertex<V, E>;
  weight?: E;
  constructor(from: Vertex<V, E>, to: Vertex<V, E>, weight?: E) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
  equals(obj: Edge<V, E>) {
    return obj.from === this.from && obj.to === this.to;
  }
}
