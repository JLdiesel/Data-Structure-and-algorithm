// Definition for a abNode.
class abNode {
  constructor(public val, public next, public random) {
  }
}

const next = new abNode(2, null, null);
const head = new abNode(1, next, next);
next.random = next;
const copyRandomList = function (head: abNode) {
  if (!head) return head;
  let vh = new abNode(null, head, null);
  while (head) {
    const node = new abNode(head.val, head.next, head.random);
    const next = head.next;
    head.next = node;
    head = next;
  }
  head = vh.next;

  while (head && head.next) {
    const next = head.next;
    next.random = next.random?.next || null;
    head = next.next;
  }
  head = vh.next;
  vh.next = head.next;
  while (head && head.next) {
    const node = head.next;
    head.next = head.next?.next || null;
    node.next = node.next?.next || null;

    head = head.next;
  }
  return vh.next;
};
