
import throttle from './02-throttle'
type InterpolateRange = [number, number]
/**
 * @param interpolation 区间映射 
 * @param rangeA 初始区间
 * @param rangeB 映射区间
 */
function interpolation(rangeA:InterpolateRange, rangeB:InterpolateRange) {
  const LA=rangeA[1]-rangeA[0]
  const LB=rangeB[1]-rangeB[0]
  return (a: number) => {
    if (a > rangeA[1]) return rangeB[1];
    if (a < rangeA[0]) return rangeB[0];
      const ratio = (a - rangeA[0]) / LA
    return Math.round(ratio*LB+rangeB[0])
  }
}
/* const f = interpolation([0, 1], [0, 100])
console.log(f(0.25));   25 */
type ConbineFN<A,B>=(input:A)=>B
function combine<T,Q,R>(fn1:ConbineFN<T,Q>,fn2:ConbineFN<Q,R>) {
  return (a:T) => {
    return fn2(fn1(a))
  }
}
//合并函数  lazy
// [...fns].reduce(combine)
// const add3 = (x: numbe0r) => x + 3;
// const subfix=(x:number)=>x+'@str'

// const f = combine(add3, subfix)
// console.log(f(5));

/**
 * @param T 动画效果
 */
class Animated<T>{
  mapF:(value:number)=>T
  value: number = 0
  timerFN:TimerFN=timer
  getValue(): T{
    return this.mapF(this.value)
  }
  updateValue(a: number) {
    this.value = a
    return this
  }
  private constructor(mapF:(value:number)=>T) {
    this.mapF=mapF
  }
  map<R>(fn: (value: T) => R) {
    const newMapf = combine(this.mapF, fn);
    return new Animated<R>(newMapf)
  }
  static of(from: number, to: number):Animated<number> {
    const newMapFunction=interpolation([0,1],[from,to])
    return new Animated(newMapFunction)
  }
  start(tick:number,last:number,callback:(val:T)=>void) {
    this.timerFN(v => {
      this.updateValue(v)
      callback(this.getValue())
    },tick,last)
  }
}
const str = 'Hello... World!'
const raf=setTimeout
type TimerFN = (cb: (a:number)=>void,tick:number,last:number)=>void
/**
 * 
 * @param callback 播放时回调
 * @param tick 多久播放一次
 * @param last 动画播放时间
 */
const  timer:TimerFN=(callback:(a:number)=>void,tick=16,last=300)=> {
  const start=new Date().getTime()
  const cb=throttle(callback,tick)
  function rafLoop() {
    raf(() => {
      const ratio = (new Date().getTime() - start) / last
      if (ratio > 1) {
        cb(1)
        return
      }
      cb(ratio)
      rafLoop()
    })
  }
  rafLoop()
}
const a = Animated.of(0, str.length).map(i => {
  return str.slice(0, i)
})
  // .updateValue(0.2).getValue();
a.start(300, 5000, () => {
  console.clear()
  console.log(a.getValue());
})

