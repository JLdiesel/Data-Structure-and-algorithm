/* 
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false  */

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

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;
  if (head.next.next === null) return head.val === head.next.val;
  //找到中间节点
  const mid = middleNode(head);
  //翻转右边部分链表
  let rhead = reverseList(mid.next);
  let lhead = head;
  const rOldHead = rhead;
  let result = true;
  while (rhead !== null) {
    if (lhead.val !== rhead.val) {
      result = false;
      break;
    }
    rhead = rhead.next;
    lhead = lhead.next;
  }
  //恢复右半部分  对右边部分链表继续翻转
  reverseList(rOldHead);
  return result;
}
/**
 * 快慢指针
 * 找到中间节点(右边部分链表头结点的前一个节点)
 * 比如1>2>3>2>1 返回3
 * 1>2>2>1 返回左边第一个2
 * @param head
 * @returns
 */
function middleNode(head: ListNode): ListNode {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
/**
 * 翻转右边部分链表
 * @param head 原链表的头节点
 * @returns 翻转之后链表的头节点
 */
function reverseList(head: ListNode): ListNode {
  let newHead: ListNode = null;
  while (head) {
    const tmp: ListNode = head.next;
    head.next = newHead;
    newHead = head;
    head = tmp;
  }
  return newHead;
}
export {};
