//逐渐将每一个元素都转换成轴点元素
import Sort from './父类';
export class QuickSort extends Sort {
  sort() {
    console.log(this.arr);
    this.sort3(0, this.arr.length);
    console.log(this.arr);
  }
  /**
   * 对[begin,end)范围的元素进行快排
   * @param begin
   * @param end
   */
  private sort3(begin: number, end: number) {
    //T(n)=2*T(n/2)+O(n)=O(nlogn)
    if (end - begin < 2) return;
    //确定轴点位置 O(n)
    let mid = this.pivotIndex(begin, end);
    //对子序列进行快排
    this.sort3(begin, mid); //T(n/2)
    this.sort3(mid + 1, end); //T(n/2)
  }
  /**
   * 确定[begin,end)范围的轴点元素
   * @param begin
   * @param end
   */
  private pivotIndex(begin: number, end: number): number {
    //随机选择一个元素和begin位置进行交换
    this.swap(begin, begin + Math.floor(Math.random() * (end - begin)));
    //备份begin位置的元素
    let pivot = this.arr[begin];
    //end为右开，需要--才能选择到最后一个元素
    end--;
    while (begin < end) {
      while (begin < end) {
        if (this.cmpElement(pivot, this.arr[end]) < 0) {
          //右边元素大于轴点元素且从右往左扫描 end元素不用变 直接--
          end--;
        } else {
          //右边元素小于等于轴点元素
          this.arr[begin++] = this.arr[end];
          break;
        }
      }
      while (begin < end) {
        if (this.cmpElement(pivot, this.arr[begin]) > 0) {
          //begin比较小，且从左往右扫描 begin元素不用变 直接++
          begin++;
        } else {
          this.arr[end--] = this.arr[begin];
          break;
        }
      }
    }
    this.arr[begin] = pivot;
    return begin;
  }
}

/* 
推导：T(n)=2*T(n/2)+O(n)=O(nlogn)

T(n)=2*T(n/2)+O(n)
T(1)=O(1)
同时除以n得
T(n)/n=T(n/2)/(n/2)+O(1)
令S(n)=T(n)/n
S(1)=O(1)
S(n/2)=S(n/4)+O(1)
S(n)=S(n/   2)+O(1)=S(n/4)+O(2)=S(n/2^k)+O(k)=S(1)+O(logn)=O(logn)
T(n)=n*S(n)=O(nlogn)
*/
