// 可选链 ?.  当对象属性不存在，短路，直接返回undefined 存在才会继续执行
type Persons = {
    name: string
    friend?: {
        name: string
        age?: number
        girlFriend?: {
            name: string
            age?: 18
        }
    }
}
const info1: Persons = {
    name: 'jl',
    friend: {
        name: 'lauv',
        age: 18
    }
}

const info: Persons = {
    name: 'jl',
    friend: {
        name: 'lauv',
        girlFriend: {
            name: 'pp',

        }
    }
}

console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.age);
