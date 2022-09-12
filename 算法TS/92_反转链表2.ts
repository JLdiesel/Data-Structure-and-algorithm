/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  function reverse(head, count) {
    if (count === 1) return head
    const tail = head.next
    const nextHead = reverse(head.next, count - 1)
    head.next = tail.next
    tail.next = head
    return nextHead
  }
  const count = right - left + 1
  const preNode = new ListNode(null, head)
  head = preNode
  while (--left) {
    head = head.next
  }
  head.next = reverse(head.next, count)
  return preNode.next
};