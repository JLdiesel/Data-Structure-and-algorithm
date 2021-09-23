function asyncFn() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}
function a(v) {
  return asyncFn().then(() => v);
}

function mapLoop() {
  const arr = [1,2,3]
  return arr.map(async item => {
    return await a(item)
  })
}
/* async function main() {
  console.log('start')
  console.log(await mapLoop());
  console.log('end')
}
main(); */
/* 
控制台输出：

start
[ Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> } ]
end
说明map会返回promise，所以可以在此基础上进一步处理
*/
async function main2() {
  console.log('start')
  await  Promise.all(await mapLoop()).then(res=>{
    console.log(res);
  })
  console.log('end')
}
main2()
/* 
控制台输出：
start
[ 1, 2, 3 ]
end
成功！说明可以在map中使用await进行异步操作，
但是map返回的是promise数组，
需要对返回的数组使用promise.all进一步处理
 */
/* 
start
1
2 
3
end
*/

// async function filterLoop() {
//   const arr = [1,2,3]
//   return arr.filter(async item => {
//     return await a(item) >= 2
//   })
// }

// async function main() {
//     console.log('start')
//     console.log(await filterLoop())
//     console.log('end')
// }

// main();

/* 
start
[ 1, 2, 3 ]
end


本意是将大于等于2的结果过滤出来，但是结果并没有被过滤，而是全都被返回了。
这是因为传给filter的函数是一个promise， 而promise是一个truthy的值，即使用promise做布尔判断时将被视为true，所以在filter中使用promise相当于arr.filter(true),
那么所有的数组元素都会通过filter。解决方法是结合map和filter
 */