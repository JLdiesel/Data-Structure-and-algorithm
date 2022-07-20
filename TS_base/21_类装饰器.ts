namespace p {
  function addName(constructor: Function) {
    constructor.prototype.name = '123';
    constructor.prototype.eat = function () {
      return 123;
    };
  }

  function addTest(a: any, b: keyof any, descriptor: PropertyDescriptor) {
    descriptor.enumerable = false;
  }
  /*   function replaceClass(constructor) {
    //返回的class的key只能多不能少
    return class {
      name: string;
      eat: () => number;
      constructor() {}
      test() {
        console.log('test');
      }
    };
  } */
  // @replaceClass
  @addName
  class Person {
    name: string;
    eat: () => number;
    constructor() {}
    @addTest
    test() {
      console.log('test');
    }
    test2() {
      console.log('test');
    }
  }
  const person = new Person();

  console.log(Object.getOwnPropertyDescriptors(person));
}
namespace q {
  function upperCase(target, key) {
    let oldValue = target[key];
    const getter = () => oldValue;
    const setter = (newValue: string) => (oldValue = newValue.toUpperCase());
    if (delete target[key]) {
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  }
  function getReal(target, key) {
    console.log(target);
    console.log(key);
  }
  class Person {
    @upperCase
    name = 'abc';
    @getReal
    static age = 18;
  }
  const person = new Person();
  console.log(person.name);
}
export {};
