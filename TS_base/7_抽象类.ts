function makeArea(shape: Shape) {
    return shape.getArea()
}
//必须要在子类中实现，并且不能创建该类的实例
abstract class Shape {
    abstract getArea()
}


class Rectangle extends Shape {
    private width: number
    private height: number
    constructor(width: number, height: number) {
        super()
        this.width = width,
            this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}
class Circle extends Shape {
    private r: number;
    constructor(r: number) {
        super()
        this.r = r
    }
    getArea() {
        return this.r ** 2 * 3.14
    }
}
const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)
console.log(makeArea(rectangle));
console.log(makeArea(circle));
