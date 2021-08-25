/* const img = document.getElementById('img') as HTMLImageElement
img.src='www.baidu.com' */

class Person {

}
class Student extends Person {
    study() {
        console.log('study');

    }
}

function sayHello(p: Person) {
    (p as Student).study();
}
const stu = new Student()
sayHello(stu)

function printMessage(msg?: string) {
    //非空断言
    console.log(msg!.length);
}
printMessage()

export {}