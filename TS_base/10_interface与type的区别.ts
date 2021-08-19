//接口可定义重复名字，会合并  可复用
//可增强系统自带的接口
interface IFOO {
    name: string
}
interface IFOO {
    age: number
}

const foo: IFOO = {
    name: '123',
    age: 18
}