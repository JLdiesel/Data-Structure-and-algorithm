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


function reactive(raw) {
    return new Proxy(raw, {
        get(target, key, receiver) {
            const dep = getDep(target, key)
            dep.depend();
            // return target[key]
            return Reflect.get(target, key, receiver)
        },
        set(target, key, newVal) {
            const dep = getDep(target, key)
            if (target[key] !== newVal) {
                target[key] = newVal;
                dep.notify()
            }
        }
    });
}
//weakMap嵌套Map 实现响应式
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



