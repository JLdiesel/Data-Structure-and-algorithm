function sort(arr:number[]) {
  for (let end = arr.length - 1; end > 0; end--) {
    let sorted=true
    for (let begin = 1; begin <= end; begin++){
      if (arr[begin] < arr[begin - 1]) {
        const tmp = arr[begin];
        arr[begin] = arr[begin - 1];
        arr[begin - 1] = tmp
        sorted=false
      }
    }
    if (sorted) {
        break;
    }
  }
  console.log(arr);
  
}
function sort2(arr:number[]) {
  for (let end = arr.length - 1; end > 0; end--) {
    let sortedIndex=0
    for (let begin = 1; begin <= end; begin++){
      if (arr[begin] < arr[begin - 1]) {
        const tmp = arr[begin];
        arr[begin] = arr[begin - 1];
        arr[begin - 1] = tmp
        sortedIndex=begin
      }
    }
    end=sortedIndex
  }
  console.log(arr);
  
}
const arr = [1, 5, 7, 33, 66, 23, 77, 99, 32]
sort(arr)