export interface ArrayType<elementType> {
  size(): number;
  isEmpty(): boolean;
  contains(element: elementType): boolean;
  add(element: elementType): void;
  get(index: number): elementType;
  set(index: number, element: elementType): elementType;
  add(index: number, element: elementType): void;
  remove(index: number): elementType;
  indexOf(element: elementType): number;
  clear(): void;
}
