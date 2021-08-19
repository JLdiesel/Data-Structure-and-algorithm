class Stark {
    items: Number[]
    constructor() {
        this.items = []
    }
    push(element: Number) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    toString() {
        return this.items.toString()
    }
}
let num: Stark = new Stark
console.log(num.isEmpty()); //true
num.push(1)
num.push(2)
num.push(3)
console.log(num.isEmpty()); //false
console.log(num.size());//3
console.log(num.toString());//'1,2,3'
console.log(num.peek());//31
console.log(num.pop());//3
console.log(num.pop());//2
console.log(num.peek());//1





