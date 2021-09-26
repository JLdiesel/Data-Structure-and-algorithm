

import Sort from './父类'

export class Selection extends Sort{
   sort() {
    console.log(this.arr);
    for (let end = this.arr.length - 1; end > 0; end--) {
      let maxIndex=0
      for (let begin = 1; begin <= end; begin++){
        if (this.cmp(maxIndex,begin)<0) {
          maxIndex=begin
        }
        this.swap(end,maxIndex)
      }
    }
    console.log(this.arr);
    
  }
}
