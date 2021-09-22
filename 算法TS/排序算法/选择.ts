function selectionSort(arr:number[]) {
  for (let end = arr.length - 1; end > 0; end--) {
    let maxIndex=0
    for (let begin = 1; begin <= end; begin++){
      if (arr[maxIndex] < arr[begin]) {
        maxIndex=begin
      }
      const tmp = arr[end];
      arr[end] = arr[maxIndex];
      arr[maxIndex]=tmp
    }
  }

  
}