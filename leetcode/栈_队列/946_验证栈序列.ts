/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if(pushed.length<=2) return true
    const arr=[]
    const length=pushed.length
    let popIndex=0
    let pushIndex=0;
    while(pushIndex<length){
      const item= pushed[pushIndex]
      arr.push(item)
      pushIndex++
      debugger;
       while(arr.length&&arr[arr.length-1]===popped[popIndex]){
           arr.pop();
           popIndex++
       }
       
    }
    if(arr.length) return false
    return true
    
};
validateStackSequences([1,2,3,4,5],
[4,5,3,2,1])