import Sort from './父类'

export class Bubble extends Sort{

   sort() {
    console.log(this.arr);
    for (let end = this.arr.length - 1; end > 0; end--) {
      let sorted=true
      for (let begin = 1; begin <= end; begin++){
        if (this.cmp(begin,begin-1)<0 ) {
          this.swap(begin,begin-1)
          sorted=false
        }
      }
      if (sorted) {
          break;
      }
    }
    console.log(this.arr);
    
  }
   sort2() {
    console.log(this.arr);
    for (let end = this.arr.length - 1; end > 0; end--) {
      let sortedIndex=0
      for (let begin = 1; begin <= end; begin++){
        if (this.cmp(begin,begin-1)<0 ) {
          this.swap(begin,begin-1)
          sortedIndex=begin
        }
      }
      end=sortedIndex
    }
    console.log(this.arr);
  }
}
