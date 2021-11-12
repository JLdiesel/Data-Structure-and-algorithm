// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null;
  //新链表的尾节点
  let newTail: ListNode = null;
  //新链表的头节点
  let newHead: ListNode = null;
  while (head != null) {
    if (head.val !== val) {
      //将head拼接到newTail的后面
      if (newTail === null) {
        newHead = head;
        newTail = head;
      } else {
        newTail = newTail.next = head;
      }
    }
    head = head.next;
  }
  if (newTail !== null) {
    newTail.next = head;
  }
  return newHead;
}

//虚拟头节点
function removeElements2(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null;
  //新链表的尾节点
  let newTail: ListNode = new ListNode();
  //新链表的头节点
  let newHead: ListNode = newTail;
  while (head != null) {
    if (head.val !== val) {
      newTail = newTail.next = head;
    }
    head = head.next;
  }
  newTail.next = null;
  return newHead.next;
}
