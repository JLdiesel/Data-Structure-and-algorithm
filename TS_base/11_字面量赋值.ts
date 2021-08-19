interface IInfo {
    name: string
    age: number
    height: number
}
const info = {
    name: '123',
    age: 18,
    height: 170,
    address: '浙江省'
}
/* const Info: IInfo = {
    name: '12312',
    age: 18,
    height: 280,
    address: '1231'
    //不能将类型“{ name: string; age: number; height: number; address: string; }”分配给类型“IInfo”。
    //   对象文字可以只指定已知属性，并且“address”不在类型“IInfo”中。
} */
const Info: IInfo = info

export default {}