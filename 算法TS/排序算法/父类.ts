export default class Sort{
    arr:number[]
    constructor(arr:number[]){
      if(arr===null||arr.length<2) return
      this.arr=arr;
    }
    protected sort(){};
    protected sort2(){};
    /**
     * 
     * @param i1 前一个索引
     * @param i2 被交换的索引
     * @returns 返回值小于0，右边的值大，大于0,左边的值大
     */
    cmp(i1:number,i2:number):number{
        return this.arr[i1]-this.arr[i2]
    }
    cmpElement(i1:number,i2:number):number{
        return i1-i2
    }
    swap(i1:number,i2:number){
      const cmp=this.arr[i1]
      this.arr[i1]=this.arr[i2]
      this.arr[i2]=cmp
    }

}