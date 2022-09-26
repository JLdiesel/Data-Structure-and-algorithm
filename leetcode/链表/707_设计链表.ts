class MyLinkNode {
  constructor(
    public val: number,
    public next?: MyLinkNode,
    public prev?: MyLinkNode
  ) {}
  insertBefore(newNode: MyLinkNode) {
    this.prev.next = newNode;
    newNode.next = this;
    newNode.prev = this.prev;
    this.prev = newNode;
  }
  insertAfter(newNode: MyLinkNode) {
    this.next.prev = newNode;
    newNode.next = this.next;
    newNode.prev = this;
    this.next = newNode;
  }
  removeSelf() {
    this.prev.next = this.next;
    this.next.prev = this.prev;
    this.prev = null;
    this.next = null;
  }
}
class MyLinkedList {
  head: MyLinkNode;
  tail: MyLinkNode;
  size: number;
  constructor() {
    this.size = 0;
    this.tail = new MyLinkNode(null, null, null);
    this.head = new MyLinkNode(null, null, null);
    this.tail.prev = this.head;
    this.head.next = this.tail;
  }

  get(index: number): number {
    if (this.isEmpty() || index > this.size - 1) return -1;
    return this.getNode(index)?.val ?? -1;
  }
  getNode(index: number): MyLinkNode {
    let head = this.head.next;
    while (index) {
      head = head.next;
      index--;
    }
    return head;
  }
  isEmpty() {
    return this.size === 0;
  }
  addAtHead(val: number): void {
    this.head.insertAfter(new MyLinkNode(val));
    this.size++;
  }

  addAtTail(val: number): void {
    this.tail.insertBefore(new MyLinkNode(val));

    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return null;
    const node = this.getNode(index);
    if (!node) return;
    node.insertBefore(new MyLinkNode(val));
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index > this.size - 1) return null;
    const node = this.getNode(index);

    if (!node) return;
    node.removeSelf();
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
