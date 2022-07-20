const msg: string = '123123';
const msg2: boolean = false;
const msg3: number = 0;
const msg4: string = '';
const arr1: string[] = [];
//!!把其他数据类型转化为boolean
let ismsg = !!arr1;
let abc = !!msg3;
let bca = !!msg4;
console.log(abc);//false
console.log(bca);//false

console.log(ismsg); //true
if (arr1) {
  console.log(123);
}
// console.log([] == ![]);
// console.log([] == true);

let message: string | null = null;
//左边为false 则选择右边 空值合并操作符
const content = message ?? '你好世界';
console.log(content);
export default {};
