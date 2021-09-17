function JLCompose(...fns:Function[]) {
  function compose(...args) {
    let index = 0;
    let result = length ? fns[index].apply(this, args) : args;
    while (++index < length) {
    result= fns[index].call(this,result) 
    }
    return result
  }
  return compose
}