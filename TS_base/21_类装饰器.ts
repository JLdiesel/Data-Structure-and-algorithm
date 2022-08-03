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
  //如果装饰的是实例属性的话，target是构造函数的原型
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
  //如果装饰的是实例属性的话，target是构造函数本身
  function getReal(target, key) {
    console.log(target);
    console.log(key);
  }
  function toNumber(target, key, descriptor: PropertyDescriptor) {
    const oldMethod = descriptor.value;
    descriptor.value = function (...args) {
      const newArgs = args.map((item) => parseFloat(item));

      return oldMethod.apply(null, newArgs);
    };
  }
  class Person {
    @upperCase
    name = 'abc';
    @getReal
    static age = 18;
    @toNumber
    sum(...args: any[]) {
      return args.reduce((prev: number, next: number) => prev + next, 0);
    }
  }

  const person = new Person();
  console.log(person.sum('1', '2', '3'));
  console.log(parseFloat(['1', '2'] as any));

  console.log(person.name);
}
namespace r {
  //静态成员就是构造函数本身 非静态成员就是构造函数的原型方法名 参数位置
  function addAge(target, methodName, paramIndex) {
    console.log(target, methodName, paramIndex);
  }
  class Person {
    age: number;
    login(userName: string, @addAge password: string) {}
    login2(@addAge ...arg) {}
  }
}
namespace s {
  function addAge(target, key, index) {
    console.log(index);
  }
  function staticName(target, key) {
    console.log(key);
  }
  function class1(target) {
    console.log('class1');
  }
  function class2(target) {
    console.log('class2');
  }
  @class1
  @class2
  class Person {
    @staticName
    age: number;
    @staticName
    name: string;
    @staticName
    static address: string;
    @staticName
    static score: number;
    @staticName
    private girl: Person;
    @staticName
    private boy: Person;
    @staticName
    login(@addAge userName: string, @addAge password: string) {}
    @staticName
    login2(
      @addAge userName: string,
      @addAge password: string,
      @addAge age: string
    ) {}
  }
  const person = new Person();
  // age name girl boy 1 0 address score class2 class1
  //方法和属性从上到下  参数从后向前 先解析函数参数后解析方法，static滞后 class最后并且从下到上
}
export {};
