import Sort from '../父类'
class CountingSort extends Sort {
    sort(){
        let max=this.arr[0]
        for (let i = 0; i < this.arr.length; i++) {
            if(this.arr[i]>max){
                max=this.arr[i]
            }
        }
        let counts:number[]=new Array[1+max];
        console.log(counts)
        counts.fill(0)
        for (let i = 0; i < this.arr.length; i++) {
                counts[this.arr[i]]++;
        }
        let index=0
        for (let i = 0; i < counts.length; i++) {
            while (counts[i]-->0) {
                this.arr[index++]=i
            }
         }
    }
}