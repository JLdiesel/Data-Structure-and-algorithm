a.JLCall=function(thisArg: any, ...argArray: any[]) {
  thisArg === 0 ? 0 : thisArg ? thisArg : {};
  const fn = this;
  const a=Symbol()
  thisArg[a] = fn;
  const result= thisArg.a(...argArray)

  thisArg.a=null
  return result
}

function a(...abc) {
  console.log(abc);
  console.log(this);
    return abc
}
a.JLCall({name:123},666,555)

a.JLApply=function(thisArg: any, argArray: any[]) {
  thisArg === 0 ? 0 : thisArg ? thisArg : {};
  const fn = this;
    const a=Symbol()
  thisArg[a] = fn;
 const result= thisArg.a(...argArray)
   thisArg.a=null;
  return result
}

a.JLApply({ name: 123 }, [666, 555])
a.JLbind = function (thisArg: any, ...argArray: any[]) {
    thisArg === 0 ? 0 : thisArg ? thisArg : {};
  const fns = this;
   const a=Symbol()
  thisArg[a] = fns;
  function fn(...arr){
    const result= thisArg.a(...argArray,...arr)
    thisArg.a = null;
    return result
 }
  return fn
}
const b = a.JLbind({ name: 123 }, 666)
b(555,444)