/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;
  function cloneGraphNode(node, map) {
    if (map[node.val]) return map[node.val];
    const newNode = new Node(node.val, []);
    map[node.val] = newNode;
    newNode.neighbors = node.neighbors.map((item) => cloneGraphNode(item, map));
    return newNode;
  }
  const map = {};
  const newNode = cloneGraphNode(node, map);

  return newNode;
};
