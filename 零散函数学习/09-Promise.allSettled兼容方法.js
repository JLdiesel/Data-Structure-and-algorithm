// npm install promise.allsettled
// shim
/* var allSettled = require('promise.allsettled')
allSettled.shim() */


// 造轮子
const formatResolved = value => ({ status: 'fulfilled', value })

const formatRejected = reason => ({ status: 'rejected', reason })

const formatPromise = promise => promise.then(formatResolved, formatRejected)

const handlePromise = promiseList => promiseList.map(formatPromise)

Promise.allSettled2 = promiseList => Promise.all(handlePromise(promiseList))
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
Promise.allSettled2(arr).then(res=>{
    console.log(res);
})