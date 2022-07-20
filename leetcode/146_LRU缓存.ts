class ListNode {
  value: number;
  key: number;
  prev: ListNode;
  next: ListNode;
  constructor(key?: number, value?: number, prev?: ListNode, next?: ListNode) {
    this.prev = prev;
    this.next = next;
    this.value = value;
    this.key = key;
  }
}
class LRUCache {
  map: Map<number, ListNode>;
  capacity: number;
  first: ListNode;
  last: ListNode;
  constructor(capacity: number) {
    this.map = new Map<number, ListNode>();
    this.capacity = capacity;
    this.first = new ListNode();
    this.last = new ListNode();
    this.first.next = this.last;
    this.last.prev = this.first;
  }
  get(key: number) {
    const node = this.map.get(key);
    if (!node) return -1;

    this.removeNode(node);
    this.addAfterFirst(node);

    return node.value;
  }
  put(key: number, value: number) {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this.removeNode(node);
      this.addAfterFirst(node);
    } else {
      if (this.map.size === this.capacity) {
        //淘汰最近最少使用的key-value；
        const outNode = this.last.prev;
        outNode.prev.next = this.last;
        this.last.prev = outNode.prev;
        this.map.delete(outNode.key);
      }
      const newNode = new ListNode(key, value, this.first, this.first.next);
      this.addAfterFirst(newNode);
      this.map.set(key, newNode);
    }
    //添加一堆新的key-value;
  }
  //从双向链表中删除node节点
  removeNode(node: ListNode) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  //把node节点加入到first后面
  addAfterFirst(node: ListNode) {
    node.prev = this.first;
    this.first.next.prev = node;
    node.next = this.first.next;
    this.first.next = node;
  }
}
export {};
