class Dep {
  constructor() {
    //订阅者集合
    this.subscribers = new Set();
  }
  addEffect(effect) {
    this.subscribers.add(effect)
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}
const info = { counter: 100 }
function watchEffect(effect) {

  effect()
}
const dep = new Dep()
function dbCounter() {
  console.log(info.counter * 2);
}
function powerCounter() {
  console.log(info.counter ** 2);
}
dep.addEffect(dbCounter)
dep.addEffect(powerCounter)
dep.notify()