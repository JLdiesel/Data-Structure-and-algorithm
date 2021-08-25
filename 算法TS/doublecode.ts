// function yanzheng(arr) {
//     //创建一个新数组用于存储前半部分括号
//     let stark = []
//     //keys用来储存左边符号
//     let keys = ['[', '{', '('];
//     //values用来储存右边符号
//     let values = [']', '}', ')'];
//     //遍历字符串
//     //如果字符串为奇数则一定为false
//         if (arr.length % 2 != 0) {
//             return false
//         }
//     for (let i in arr) {
        
//         //如果出现左边符号,则把它加入到stark数组中
//         if (keys.includes(arr.charAt(i))) {
//             stark.push(arr.charAt(i))
//             //如果出现右边符号，则判断这个符号对应keys的下标是否和stark数组的最后一个元素对应value的下标相同
//             //如果下标相同则进入下一次循环，并且删除stark数组的最后一个元素
//             //如果不同，则返回false
//         } else if (values.includes(arr.charAt(i)) && values.indexOf(arr.charAt(i)) != keys.indexOf(stark.pop())) {
//             return false
//         }

//     }
//     //最后判断循环结束后stark数组中是否还有值
//     //如果有则证明左边符号多于右边符号
//     if (stark.length != 0) {
//         return false
//     }
//     return true
// }
function yanzheng(str:string) {
  while (str.includes('()') || str.includes('[]') || str.includes('{}'))
  {
  str=  str.replace('()','')
  str=   str.replace('[]','')
  str=   str.replace('{}','')
  }
  return str.length===0
}



export default yanzheng