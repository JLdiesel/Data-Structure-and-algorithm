

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
    let newHead: ListNode = null
    while (head) {
        const nextItem: ListNode = head.next
        head.next = newHead
        newHead = head
        head = nextItem
    }

    return newHead
};

function reverseList2(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
    const newHead: ListNode = reverseList2(head.next)
    head.next.next = head
    head.next = null
    return newHead
};