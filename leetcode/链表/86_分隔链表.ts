/* 
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
*/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  if (head === null) return null;
  const lHead = new ListNode();
  let lTail = lHead;
  const rHead = new ListNode();
  let rTail = rHead;
  while (head !== null) {
    if (head.val < x) {
      //放在lTail后面
      lTail = lTail.next = head;
    } else {
      rTail = rTail.next = head;
    }
    head = head.next;
  }
  rTail.next = null;
  lTail.next = rHead.next;
  return lHead.next;
}
