// Readonly
//构造一个所有属性都Type设置为的类型readonly，这意味着不能重新分配构造类型的属性。
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};
// todo.title = "Hello";
//Record<Keys,Type>  构造一个对象类型，其属性键为Keys，属性值为Type。此实用程序可用于将一种类型的属性映射到另一种类型。
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

cats.boris;

type Key = 'jl' | 'why' | 'lyj';
interface Value {
  children: Record<Key, Value>;
  name: string;
  age: number;
}

const Person: Record<Key, Value> = {
  jl: { children: undefined, name: 'jl', age: 19 },
  why: undefined,
  lyj: undefined,
};
export {};
