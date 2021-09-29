import Sort from './父类'
export class MergeSort extends Sort{
    private leftArr:number[]
    sort(){
        this.leftArr=new Array(this.arr.length>>1)
        console.log(this.arr)
        this.sort3(0,this.arr.length)
        console.log(this.arr)
    }
    //对[begin,end)进行归并排序
   private sort3(begin:number,end:number){
        //如果元素数量为1 则直接返回
        if(end-begin<2) return 
        let mid =(begin+end)>>1;
        //递归对左边进行归并
        this.sort3(begin,mid)
        //递归对右边进行归并
        this.sort3(mid,end)
        //合并两边的元素
        this.merge(begin,mid,end)
    }
    /**
     * 对[begin,mid)和[mid,end]范围的序列进行合并
     * @param begin 初始下标
     * @param mid 分割下标
     * @param end 右开的下标
     */
   private merge(begin:number,mid:number,end:number){
        let li=0;
        let le=mid-begin;//左边数组的初始和最后下标
        let ri=mid ;
        let re=end; //右边数组的初始和最后下标
        let ai=begin //数组下标
        //备份左边数组
        for (let i:number = li; i < le; i++) {
            this.leftArr[i]=this.arr[begin+i]
        }
        while (li<le) {
            if(ri<re&&this.cmpElement(this.arr[ri],this.leftArr[li])<0){
                this.arr[ai++]=this.arr[ri++]
            }else{
                this.arr[ai++]=this.leftArr[li++]
            }
        }
    }
}