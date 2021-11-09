export class BloomFilter<T> {
  /**
   * 二进制向量的长度(一共有多少个二进制位)
   */
  private bitSize: number = 20;
  /**
   * 二进制向量
   */
  private bits: number[];
  /**
   * 哈希函数的个数
   */
  private hashSize: number;
  /**
   *
   * @param n 数据规模
   * @param p 误判率
   */
  constructor(n: number, p: number) {
    if (n <= 0 || p <= 0 || p >= 1) {
      throw new Error('n||p 传参错误');
    }
    const ln2 = Math.log(2);
    //求出二进制向量的长度
    this.bitSize = Math.floor(-(n * Math.log(p)) / (ln2 * ln2));
    // console.log(this.bitSize);

    //求出哈希函数的个数
    this.hashSize = Math.floor((this.bitSize * ln2) / n);
    console.log((this.bitSize + 63) / 64);

    //bits数组的长度
    this.bits = new Array(Math.floor((this.bitSize + 63) / 64)).fill(0);
  }
  private hashCode(key: T): number {
    let hashCode = 0;
    switch (typeof key) {
      case 'number':
        if (key % 1 === 0) {
          hashCode = key;
          break;
        }
        const str = key.toString();
        for (let i = 0; i < str.length; i++) {
          hashCode = (hashCode << 5) - hashCode + str.charCodeAt(i);
        }
        break;
      case 'string':
        for (let i = 0; i < key.length; i++) {
          // hashCode=31*hashCode+key.charCodeAt(i)
          hashCode = (hashCode << 5) - hashCode + key.charCodeAt(i);
        }
        break;
      case 'object':
        if (key === null) return 0;
        for (const keys in key) {
          if (key.hasOwnProperty(keys)) {
            hashCode =
              (hashCode << 5) -
              hashCode +
              this.hashCode(key[keys] as unknown as T);
          }
        }
        break;
      default:
        break;
    }
    return hashCode;
  }
  /**
   * 添加元素
   */
  put(value: T) {
    this.nullCheck(value);
    //利用value生成两个整数
    const hash1 = this.hashCode(value);
    const hash2 = hash1 >>> 16;
    for (let i = 0; i < this.hashSize; i++) {
      let combinedHash = hash1 + i * hash2;
      if (combinedHash < 0) {
        combinedHash = ~combinedHash;
      }
      //生成一个二进制位的索引
      const index = combinedHash % this.bitSize;
      //设置第index位置的二进制位为1
      this.setBit(index);
    }
  }
  /**
   * 设置index位置的二进制为1
   * @param index
   */
  setBit(index: number) {
    //找到对应的long值
    const value = this.bits[index / 64];
    //找到二进制位在long内部的索引
    const key = index % 64;
    //更改二进制位
    this.bits[index / 64] = value | (1 << key);
  }
  /**
   * 查看index位置的二进制的值是否为1
   * true:1 false:0
   * @param index
   */
  get(index: number): boolean {
    //找到对应的long值
    const value = this.bits[index / 64];
    const key = index % 64;
    return (value & (1 << key)) !== 0;
  }
  /**
   * 查询元素是否存在
   */
  public contains(value: T) {
    //利用value生成两个整数
    const hash1 = this.hashCode(value);
    const hash2 = hash1 >>> 16;
    for (let i = 0; i < this.hashSize; i++) {
      let combinedHash = hash1 + i * hash2;
      if (combinedHash < 0) {
        combinedHash = ~combinedHash;
      }
      //生成一个二进制位的索引
      const index = combinedHash % this.bitSize;
      //设置第index位置的二进制位为1
      if (!this.get(index)) return false;
    }
    return true;
  }
  nullCheck(value: T) {
    if (value === null || value === undefined) {
      throw new Error('Value must not be null');
    }
  }
}
