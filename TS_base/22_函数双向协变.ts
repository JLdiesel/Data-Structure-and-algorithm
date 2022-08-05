type Func = (a: number, b: number) => void;
let sum: Func;
function f1(a: number): void {}
sum = f1;
function f2(): void {}
sum = f2;
sum(1, 2)

class Animal{ }
class Dog extends Animal{
  name:123
}
class BlackDog extends Animal{
  age:16
}
class WhiteDog extends Dog{
  color:'white'
}
let animal = new Animal;
let dog = new Dog
let blackDog = new BlackDog
let whiteDog=new WhiteDog
type dogType = (a:Dog)=>Dog
function get(a:dogType) {
  a(animal)
  a(blackDog);
  a(whiteDog);
  a(dog);
}
export{}