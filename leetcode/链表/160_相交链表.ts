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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) return null;
  const Ahead = headA;
  const Bhead = headB;
  while (headA !== headB) {
    headA = headA ? headA.next : Bhead;
    headB = headB ? headB.next : Ahead;
  }
  return headA;
}
