class Nodes <E>{
    element: E;
    prev: Nodes<E>
    next: Nodes<E>
    constructor(prev, element:E, next) {
        this.prev = prev
        this.element = element;
        this.next = next
    }
}
class LinkedList<E> {
    private head: Nodes<E>;
    private last:  Nodes<E>
    private length: number;
    constructor() {
        this.head = null;
        this.last = null;
        this.length = 0;
    }
    //在最后添加
    append(element: E) {
        this.insert(this.length, element)
    }
    //特定位置插入
    insert(position: number, element: E) {
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
            let current:  Nodes<E> = this.head
            let previous:  Nodes<E> = null;
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
    get(index:number):Nodes<E> {
        return  this.getNode(index)
    }
    set(index: number, element: E) {
        const old:E =this.getNode(index).element
        this.getNode(index).element = element;
        return old
    }
    clear() {
        this.length = 0;
        this.head = this.last = null
    }
    private getNode(index: number): Nodes<E>{
        this.xiabiao(index)
        let node = this.head
        for (let i = 0; i < index; i++){
            node=node.next
        }
        return node
    }
    remove(node:Nodes<E>) {
        if (this.length === 1) {
            this.head = null;
            this.last=null
        } else {
            let prev = node.prev;
            let next = node.next;
            prev.next = next;
            next.prev = prev;;
            if (node === this.head) {
                this.head=next
            }
            if (node === this.last) {
                this.last=prev
            }
        }
        this.length--
        return node.element
    }
    private xiabiao(position): Error {
        if (position < 0 || position > this.length) return (new Error('下标越界'))
    }
}

export default LinkedList

