import MapA from "./11_HashMap";
//字典树 通过首字母查单词
class Trie<V>{
  private _size: number;
  private root: TrieNode<V>
  constructor() {
    this._size = 0
    this.root = null
  };
  get size() {
    return this._size
  }
  isEmpty() {
    return this._size === 0
  }
  clear() {
    this._size = 0;
    this.root = null
  }
  node(key: string): TrieNode<V> {
    if (this.root === null) return null;
    this.keyCheck(key)
    let node = this.root;
    for (let item of key) {
      node = node.getChildren().get(item)
      if (node === null) return null
    }

    return node.word ? node : null
  }
  private keyCheck(key: string) {
    if (key === null || key.length === 0) {
      throw new Error('key must not be empty')
    }
  }
  get(key: string) {
    const node = this.node(key);
    return node ? node.value : null
  }
  contains(key: string) {
    return this.node(key) !== null
  }
  add(key: string, value: V) {
    if (!this.root) this.root = new TrieNode()
    this.keyCheck(key)
    let node = this.root;
    for (const item of key) {
      let newnode = node.getChildren().get(item)
      if (newnode === null) {
        newnode = new TrieNode();
        node.getChildren().put(item, newnode);
      }
      node = newnode
    }
    if (node.word) {
      //已经存在这个单词
      let oldValue = node.value;
      node.value = value;
      return oldValue
    }
    //新建的情况或曾经存在但不是单词
    node.word = true;
    node.value = value
    this._size++;
    return null
  }
  remove(key: string) {

  }
  startsWith(prefix: string) {
    if (this.root === null) return null;
    this.keyCheck(prefix)
    let node = this.root;
    for (let item of prefix) {
      node = node.getChildren().get(item)
      if (node === null) return null
    }
    return true
  }
}
class TrieNode<V>{
  children: MapA<string, TrieNode<V>>
  value: V;  //存储字母
  word: boolean //是否为一个单词
  getChildren(): MapA<string, TrieNode<V>> {
    return this.children ? this.children : this.children = new MapA()
  }
}
export default Trie