/* 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null || l2 === null) return null;
  let dummyHead: ListNode = new ListNode();
  let last: ListNode = dummyHead;
  //进位值
  let carry: number = 0;
  while (l1 !== null || l2 !== null) {
    let v1 = 0;
    if (l1 !== null) {
      v1 = l1.val;
      l1 = l1.next;
    }
    let v2 = 0;
    if (l2 !== null) {
      v2 = l2.val;
      l2 = l2.next;
    }
    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    last = last.next = new ListNode(sum % 10);
  }
  if (carry > 0) {
    last.next = new ListNode(1);
  }
  return dummyHead.next;
}
