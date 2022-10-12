/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  const set = new Set(nums);
  let count = 0,
    flag = false;
  while (head) {
    if (set.has(head.val)) {
      if (!flag) {
        flag = true;
        count++;
      }
    } else {
      flag = false;
    }
    head = head.next;
  }
  return count;
};
