class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/* 
给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：

二叉树的根是数组 nums 中的最大元素。
左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
返回有给定数组 nums 构建的 最大二叉树 
 */
//递归实现
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums) return null;
  return findRoot(nums, 0, nums.length);
}
function findRoot(nums: number[], left: number, right: number) {
  //如果最大值和
  if (left === right) {
    return null;
  }
  //找到最大值的下标
  let maxIndex = left;
  for (let i = left + 1; i < right; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  const root = new TreeNode(nums[maxIndex]);
  root.left = findRoot(nums, left, maxIndex);
  root.right = findRoot(nums, maxIndex + 1, right);
  return root;
}
//栈实现  返回一个数组，数组存储每个节点的父节点的索引
//利用栈  求左、右边第一个比它大的树
function constructMaximumBinaryTreeQueue(nums: number[]): TreeNode | null {
  if (!nums) return null;
  return findRoot(nums, 0, nums.length);
}

function parentIndexes(nums: number[]): number[] {
  /**
   * 扫描一遍所有的元素
   * 保持栈内单调递减
   */
  const lis = new Array(nums.length);
  const ris = new Array(nums.length).fill(-1);
  const stark = [];
  for (let i = 0; i < nums.length; i++) {
    while (stark.length && nums[i] > nums[stark[stark.length - 1]]) {
      ris[stark.pop()] = i;
    }
    lis[i] = stark.length ? stark[stark.length - 1] : -1;
    stark.push(i);
  }
  console.log(lis); //[ -1, 0, 1, -1, 3, 3 ]
  console.log(ris); //[ 3, 3, 3, -1, 5, -1 ]
  const pis = lis.map((item, index) => {
    if (item === -1) {
      return ris[index];
    } else if (ris[index] === -1) {
      return item;
    }
    if (nums[item] < nums[ris[index]]) {
      return item;
    } else {
      return ris[index];
    }
  });
  console.log(pis); //[ 3, 0, 1, -1, 5, 3 ]

  return pis;
}
parentIndexes([3, 2, 1, 6, 0, 5]);
