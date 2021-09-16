class Dep {
    constructor() {
        //订阅者集合
        this.subscribers = new Set();
    }
    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect)
        }
    }
    notify() {
        this.subscribers.forEach(effect => {
            effect()
        })
    }
}

//weakMap嵌套Map 实现响应式
function reactive(raw) {
    Object.keys(raw).forEach(key => {
        const dep = getDep(raw, key)
        let value = raw[key]
        Object.defineProperty(raw, key, {
            get() {
                dep.depend()
                return value
            },
            set(newval) {
                if (value != newval) {
                    value = newval;
                    dep.notify()
                }
            }
        })
    })
    return raw
}
const targetMap = new WeakMap()
function getDep(target, key) {
    //根据target对象取出对应的map对象
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    //取出具体的dep对象
    let dep = depsMap.get(key)
    if (!dep) {
        dep = new Dep()
        depsMap.set(key, dep)
    }
    return dep

}

function watchEffect(effect) {
    activeEffect = effect
    effect();
    activeEffect = null;
}



const foo = reactive({ height: 1.88 })
const info = reactive({ counter: 100, name: 'jl' })
let activeEffect = null


function dbCounter() {
    console.log(info.counter * 2);
}
function powerCounter() {
    console.log(info.counter ** 2, foo.height);
}
function getName() {
    console.log(info.name);
}
function getHeight() {
    console.log(foo.height);
}
watchEffect(dbCounter)
watchEffect(powerCounter)
watchEffect(getName)
watchEffect(getHeight)
info.counter++
info.name = 'jl'
