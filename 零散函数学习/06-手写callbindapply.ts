a.JLCall=function(thisArg: any, ...argArray: any[]) {
  thisArg === 0 ? 0 : thisArg ? thisArg : {};
  const fn = this;
  thisArg.fn = fn;
 const result= thisArg.fn(...argArray)

  thisArg.fn=null
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
  thisArg.fn = fn;
 const result= thisArg.fn(...argArray)
   thisArg.fn=null;
  return result
}

a.JLApply({ name: 123 }, [666, 555])
a.JLbind = function (thisArg: any, ...argArray: any[]) {
    thisArg === 0 ? 0 : thisArg ? thisArg : {};
    const fns = this;
    thisArg.fns = fns;
  function fn(...arr){
    const result= thisArg.fns(...argArray,...arr)
    thisArg.fn = null;
    return result
 }
  return fn
}
const b = a.JLbind({ name: 123 }, 666)
b(555,444)