/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const vhead = new ListNode(null, head);
  let prehead = vhead;
  while (head?.next) {
    const next = head.next.next;
    prehead.next = head.next;
    head.next.next = head;
    head.next = next;
    prehead = head;
    head = head.next;
  }
  return vhead.next;
};
