 function asyncFn() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
  
  function a(v) {
    return asyncFn().then(() => v);
  }


async function forLoop() {
  for (let i = 1; i <= 3; i++) {
      console.log(await a(i))
  } 
}

async function forEachLoop() {
  const arr = [1,2,3]
  return arr.forEach(async item => {
    console.log(await a(item))
  })
}
/* 
start和end最先输出，且1，2，3在1s后同时输出

因为forEach不识别异步回调，所以不能在forEach中使用await进行异步操作
 */
async function main() {
  console.log('start')
  await forLoop()
  console.log('end')
}
main();





