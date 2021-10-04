import Sort from '../父类'
export class CountingSort extends Sort {
    sort3() {
        //遍历数组 找出最大的N 创建N个数组
        let max = this.arr[0]
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i]
            }
        }
        let counts: number[] = new Array[1 + max];
        console.log(counts)
        counts.fill(0)
        //遍历数组 使counts数组中对应的个数++
        for (let i = 0; i < this.arr.length; i++) {
            counts[this.arr[i]]++;
        }
        let index = 0
        //遍历counts数组，逐渐清零个数，遍历到一个添加到数组
        for (let i = 0; i < counts.length; i++) {
            while (counts[i]-- > 0) {
                this.arr[index++] = i
            }
        }
    }
    sort() {
        let min = this.arr[0]
        let max = this.arr[0]
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i]
            }
            if (this.arr[i] < min) {
                min = this.arr[i]
            }
        }
        //开辟内存空间存储次数
        let counts = new Array(max - min + 1).fill(0);
        for (let i = 0; i < this.arr.length; i++) {
            counts[this.arr[i] - min]++;
        }
        //累加次数
        for (let i = 1; i < counts.length; i++) {
            counts[i] += counts[i - 1]
        }
        //counts[i]-1就是该数应该在数组中的位置 
        //从后往前遍历 放到有序数组中的合适位置，找到位置就counts[i]-=1
        let newArr = new Array[this.arr.length];
        for (let i = this.arr.length - 1; i >= 0; i--) {
            //this.arr[i] - min 在counts数组中的索引
            //求出索引counts[this.arr[i] - min]-1 该值在有序数组中的下标
            newArr[--counts[this.arr[i] - min]] = this.arr[i]
        }
        //把newArr赋值给arr
        for (let i = 0; i < newArr.length; i++) {
            this.arr[i] = newArr[i]
        }
    }
}