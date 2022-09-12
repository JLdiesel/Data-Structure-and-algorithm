/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let count = 0
  if (k === 1) return head
  function reverse(head, count) {
    if (count === 1) return head
    const tail = head.next
    const nextHead = reverse(head.next, count - 1)
    head.next = tail.next
    tail.next = head
    return nextHead
  }
  let prevHead = head
  const prevNode = new ListNode(null, head)
  head = prevNode;
  while (true) {
    const nowHead = head
    //主要用于检测是否够k个一组
    let temp = k
    while (temp && head) {
      head = head.next
      temp--
    }
    if (!head) return prevNode.next
    head = prevHead
    const nextHead = reverse(prevHead, k)
    prevHead = head.next
    nowHead.next = nextHead
  }

};
var reverseKGroup2 = function (head, k) {
  if (k === 1) return head
  function reverse(head, count) {
    if (count === 1) return head
    const tail = head.next
    const nextHead = reverse(head.next, count - 1)
    head.next = tail.next
    tail.next = head
    return nextHead
  }
  function reverseN(head, count) {
    const prevHead = head
    let cnt = count
    while (--cnt && head) head = head.next
    if (!head) return prevHead
    return reverse(prevHead, count)
  }
  let prevHead = head
  const prevNode = new ListNode(null, head)
  head = prevNode;
  while ((head.next = reverseN(prevHead, k)) !== prevHead) {
    head = prevHead
    prevHead = head.next
  }
  return prevNode.next
};
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const head = new ListNode(1, null)
head.next = new ListNode(2, null)
head.next.next = new ListNode(3, null)
head.next.next.next = new ListNode(4, null)
head.next.next.next.next = new ListNode(5, null)
reverseKGroup(head, 2)
export { }