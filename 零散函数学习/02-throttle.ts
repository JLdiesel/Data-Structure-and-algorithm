
type FNThrottle = (...args: Array<any>) => void
/** 
 * 
 *   @throttle  节流函数
 * 
 *  */ 
function throttle(fn: FNThrottle, interval = 160) {
  let open=true
  return (...args: Array<any>) => {
    if (!open) {    
      return
    }
     fn(...args)
      open=false
    const ts = new Date().getTime()
    const mod = ts % interval
    setTimeout(() => {
      open = true
    }, interval-mod)
  }
}
// let count=0
// const onMouseMove = throttle(() => {
//   console.log('move',count);
// })
// const I = setInterval(() => {
//   if (count ++ === 1000) {
//     clearTimeout(I)
//   }
//   onMouseMove()
// },1)
export default throttle