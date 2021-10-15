export interface Graph<V> {
  edgesSize(): number;
  verticesSize(): number;
  addVertex(v: V): void;
  addEdge(from: V, to: V, weight?: number): void;
  removeVertex(v: V): void;
  removeEdge(from: V, to: V);
}
export class Vertex<V> {
  value: V;
  inEdges: Set<Edge<V>>;
  outEdges: Set<Edge<V>>;
  constructor(value: V) {
    this.value = value;
  }
  equals(obj: Vertex<V>) {
    return obj.value === this.value;
  }
}
export class Edge<V> {
  from: Vertex<V>;
  to: Vertex<V>;
  weight?: number;
  constructor(from: Vertex<V>, to: Vertex<V>, weight?: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
  equals(obj: Edge<V>) {
    return obj.from === this.from && obj.to === this.to;
  }
  compareTo(obj: Edge<V>) {
    return this.weight - obj.weight;
  }
}

export class PathInfo<V> {
  weight: number;
  list: Edge<V>[];
  constructor(weight: number) {
    this.weight = weight;
    this.list = [];
  }
}
