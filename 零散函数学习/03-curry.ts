/**
 * 柯里化
 * 
 */

type FNCurry = (...args: Array<any>) => any;
function curry(f: FNCurry) {
  const g = (...args: Array<any>) => {
    if (args.length >= f.length) {
      return f.call(this,...args)
    }
    return (...other:Array<any>) => {
      return  g.call(this,...args,...other)
    }
  }
  return g
}
const _add = (num: number, num2: number, num3: number) => {
  return num+num2+num3
}
const  add=curry(_add)
console.log(add(1)(2)(3));
console.log(add(1,2)(3));
console.log(add(1)(2,3));


export {}