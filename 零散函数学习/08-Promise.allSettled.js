const promise1=new Promise((res,rej)=>{
    res(1)
})
const promise2=new Promise((res,rej)=>{
    res(2)
})
const promise3 = new Promise((resolve, reject) => { reject(2) })
const promise4=new Promise((res,rej)=>{
    res(3)
})
const arr=[promise1,promise2,promise3,promise4]
Promise.all(arr).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
// [ 1, 2, 3 ]

//不兼容IE、Edge Firefox for Android
Promise.allSettled(arr).then(res=>{
    console.log(res);
})

// [
//     { status: 'fulfilled', value: 1 },
//     { status: 'fulfilled', value: 2 },
//     { status: 'fulfilled', value: 3 } 
//   ]


// 把第二个promise的状态改成rejected之后
/* [
    { status: 'fulfilled', value: 1 },
    { status: 'fulfilled', value: 2 },
    { status: 'rejected', reason: 2 },
    { status: 'fulfilled', value: 3 }
  ]
  2 */
