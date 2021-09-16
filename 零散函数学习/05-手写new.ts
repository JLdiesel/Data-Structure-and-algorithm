function _new(fn:Function, ...rest) {
    //基于fn的prototype构建对象的原型
    const thisObj = Object.create(fn.prototype);
    //将thisObj作为fn的this，继承其属性，并获取返回结果为result
    const result = fn.apply(thisObj, rest);
    //根据result对象的类型决定返回结果 如果new的函数有返回值，则会返回那个返回值
    return typeof result === "object" ? result : thisObj;
}