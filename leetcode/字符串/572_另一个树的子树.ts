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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null || subRoot === null) return false;
  return contains(postSerialize(root), postSerialize(subRoot));
  //   return postSerialize(root).includes(postSerialize(subRoot));
}
//利用后序遍历的方式进行序列化
function postSerialize(root: TreeNode) {
  let strs: string[] = [];
  postSerialize2(root, strs);

  return ''.concat(...strs);
}
function postSerialize2(node: TreeNode, str: string[]) {
  if (node.left === null) {
    str.push('#!');
  } else {
    postSerialize2(node.left, str);
  }
  if (node.right === null) {
    str.push('#!');
  } else {
    postSerialize2(node.right, str);
  }

  str.push(`${node.val}`);
  str.push('!');
}
function main() {
  const root = new TreeNode(3);
  root.right = new TreeNode(5);
  root.left = new TreeNode(4);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(2);
  console.log(postSerialize(root));
}
main();
function contains(text: string, pattern: string): boolean {
  const plen = pattern.length;
  const tlen = text.length;
  if (tlen < plen) return false;
  //next数组
  const nextArr = next(pattern);
  let pi = 0,
    ti = 0;
  let tmax = tlen - plen;
  while (pi < plen && ti - pi <= tmax) {
    if (pi < 0 || text.charAt(ti) === pattern.charAt(pi)) {
      ti++;
      pi++;
    } else {
      pi = nextArr[pi];
    }
  }
  return pi === plen;
}

function next(pattern: string) {
  const len = pattern.length;
  const next = new Array(len);
  let i = 0;
  let n = (next[i] = -1);
  let imax = len - 1;
  while (i < imax) {
    if (n < 0 || pattern.charAt(i) === pattern.charAt(n)) {
      i++;
      n++;
      if (pattern.charAt(i) === pattern.charAt(n)) {
        next[i] = next[n];
      } else {
        next[i] = n;
      }
    } else {
      n = next[n];
    }
  }
  return next;
}
export {};
