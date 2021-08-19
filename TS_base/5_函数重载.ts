function add(num1: number, num2: number): number
function add(num1: string, num2: string): string
//函数的重载 
function add(num1:any,num2:any) {
    return num1+num2
}

const result1 = add(30, 40)
const result3 = add('30', '40')
//没有与此调用匹配的重载 err
// const result2=add({'123'},{'456'})

function getLength(args: string): number;
function getLength(args: any[]): number;
function getLength(args:any):number {
    return args.length
}
console.log(getLength('abc'));
console.log(getLength(['abc','123']));

