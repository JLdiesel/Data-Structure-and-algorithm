import Sort from './父类'
class ShellSort extends Sort{
    private stepSequence:number[]   //步长列表
    sort(){
        this.shellSetpSequence()
        for (const step of this.stepSequence) {
            this.sort3(step)
        }
    }

    //分成多少列进行排序
    sort3(step:number){
        //col 第几列
        for (let col = 0; col < step; col++) {
            for (let begin = col+step; begin < this.arr.length; begin+=step) {
                let cur=begin;
                while (cur>0&&this.cmp(cur,cur-step)<0) {
                    this.swap(cur,cur-step);
                    cur-=step
                }
            }
            
        }
    }
    shellSetpSequence(){
        let setpSequence=[];
        let step=this.arr.length;
        while ((step=step>>1)>0) {
            setpSequence.push(step)
        }
        this.stepSequence=setpSequence
    }
}