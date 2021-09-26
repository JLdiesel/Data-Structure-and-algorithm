import Sort from './父类'
export class Insert extends Sort{
    indexOf(element:number){
        if(this.arr===null&&this.arr.length===0) return -1;
        let begin=0;
        let end=this.arr.length;
        while (begin<end) {
            let mid=(begin+end)>>1;
            if(element<this.arr[mid]){
                //右开
                end=mid
            }else if(element>this.arr[mid]){
                //左闭
                begin=mid+1
            }else{
                return mid
            }
        }
        return -1
    }
    sort(){
        console.log(this.arr);
        for (let begin = 1; begin < this.arr.length; begin++) {
            let cur=begin;
            while (cur>0&&this.cmp(cur-1,cur)>0) {
                this.swap(cur,--cur);
            }
        }
        console.log(this.arr);
    }
    sort2(){
        //优化版本1 只需要与前一个比较，如果前一个比较大，那么就把前一个后移一位, 找到比自己小的第一个元素后，赋值给前一个改变位置元素的位置
        console.log(this.arr);
        for (let begin = 1; begin < this.arr.length; begin++) {
            let curIndex=begin;
            //保存初始
            const cur=this.arr[begin]
            while (curIndex>0&&this.cmp(curIndex-1,begin)>0) {
                this.arr[curIndex]=this.arr[--curIndex]
            }

            this.arr[curIndex]=cur
        }
        console.log(this.arr);
    }
    sort3(){
        //优化版本3 利用二分搜索
        console.log(this.arr);
        for (let begin = 1; begin < this.arr.length; begin++) {
           
        }
        console.log(this.arr);
    }
}