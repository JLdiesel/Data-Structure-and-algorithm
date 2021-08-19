class Nodes {
    element: unknown;
    prev: Nodes
    next: Nodes
    constructor(prev, element, next) {
        this.prev = prev
        this.element = element;
        this.next = next
    }
}
class LinkedList {
    private head: Nodes;
    private last: Nodes
    private length: number;
    constructor() {
        this.head = null;
        this.last = null;
        this.length = 0;
    }
    //在最后添加
    append(element: unknown) {
        this.insert(this.length, element)
    }
    //特定位置插入
    insert(position: number, element: unknown) {

        //判断越界
        this.xiabiao(position);
        const newNode = new Nodes(null, element, null)
        if (position === 0) {
            if (!this.head) {
                this.head = newNode
                this.last = newNode
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode
            }
        } else if (position === this.length) {
            this.last.next = newNode
            newNode.prev = this.last
            newNode.next = null
            this.last = newNode
        }
        else {
            let index = 0
            let current: Nodes = this.head
            let previous: Nodes = null;
            while (index++ < position) {
                previous = current;
                current = current.next
            }
            previous.next = newNode;
            newNode.prev = previous
            newNode.next = current
            current.prev = newNode
        }
        this.length++
    }
    clear() {
        this.length = 0;
        this.head = this.last = null
    }
    remove() {

    }
    private xiabiao(position): Error {
        if (position < 0 || position > this.length) return (new Error('下标越界'))
    }
}
let list = new LinkedList()
list.append('1');
list.append('2');
list.append('3');
list.insert(1, '123')
list.insert(1, '1234')
list.clear()
console.log(list);
