type Person = { name: string; age: number };
const xiaoming: Partial<Person> = {};
const xiaohong: Omit<Person, 'name' | 'age'> = {};

//Partial<Type> 构造一个所有属性都Type设置为可选的类型。此实用程序将返回表示给定类型的所有子集的类型。
interface Todo {
  title: string;
  description: string;
}
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: '我是必传title',
  description: '我是必传description',
};

const todo2 = updateTodo(todo1, {
  description: '可选的partial',
});
//Required把所有可选变为必选参数 和 Partial相反
interface Props {
  a?: number;
  b?: string;
}
const obj: Props = { a: 5 };
// const obj2: Required<Props> = { a: 5 };

export {};
