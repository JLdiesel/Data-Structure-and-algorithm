class Animal {
  action() {
    console.log('animal action');
  }
}

class Dog extends Animal {
  action() {
    console.log('Dog action');
  }
}
class Fish extends Animal {
  action() {
    console.log('Fish action');
  }
}
function makeAction(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action();
  });
}
//父类引用(类型)指向子类对象    Dog action _ Fish action
makeAction([new Dog(), new Fish()]);
