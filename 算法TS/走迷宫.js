// 走迷宫
var map = {
  data: [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
  row: 4,
};
var maps = [];
var logMaps = [];

function start(data, inPos, outPos) {
  var build = function (data) {
    for (var i = 0; i < row; i++) {
      var arry = [];
      var arry2 = [];
      for (var j = 0; j < col; j++) {
        arry.push({
          val: data[j + i * col],
          row: i,
          col: j,
          f: 0,
          s: 0,
          e: 0,
          parent: null,
        });
        arry2.push(data[j + i * col]);
      }
      maps.push(arry);
      logMaps.push(arry2);
    }
  };

  var sortOpenList = function () {
    openList.sort((a, b) => {
      return a.f - b.f;
    });
  };

  /**
   * 当前点与起点权重
   * @param {} node
   */
  var getWeight_s = function (node) {
    return (
      Math.abs(node.row - startNode.row) + Math.abs(node.col - startNode.col)
    );
  };

  /**
   * 当前点与终点权重
   * @param { } node
   */
  var getWeight_e = function (node) {
    return Math.abs(node.row - endNode.row) + Math.abs(node.col - endNode.col);
  };

  var getNode = function (row, col) {
    return maps[row][col];
  };

  var findPath = function (inNode, outNode) {
    var curtNode = inNode;
    openList.push(curtNode);
    var setNear = function (nearNode, curtNode) {
      if (closeList.indexOf(nearNode) > -1) return; //已经在关闭列表中
      if (nearNode.val === 1) return; //不可行走
      if (openList.indexOf(nearNode) > -1) {
        //已经再开放列表里
        if (nearNode.s < curtNode.s) {
          nearNode.parent = curtNode;
          nearNode.s = getWeight_s(nearNode);
          nearNode.e = getWeight_e(nearNode);
          nearNode.f = nearNode.s + nearNode.e;
        }
      } else {
        nearNode.parent = curtNode;
        nearNode.s = getWeight_s(nearNode);
        nearNode.e = getWeight_e(nearNode);
        nearNode.f = nearNode.s + nearNode.e;
        openList.push(nearNode);
      }
    };

    while (openList.length > 0) {
      if (curtNode === outNode) break;
      sortOpenList();
      curtNode = openList.shift(); //取权重排序后最小的
      closeList.push(curtNode);
      //只判断 4方向
      let upNode, rightNode, downNode, leftNode;
      const curtRow = curtNode.row;
      const curtCol = curtNode.col;
      if (curtRow > 0) {
        upNode = maps[curtRow - 1][curtCol];
        setNear(upNode, curtNode);
      }
      if (curtCol < col - 1) {
        rightNode = maps[curtRow][curtCol + 1];
        setNear(rightNode, curtNode);
      }
      if (curtRow < row - 1) {
        downNode = maps[curtRow + 1][curtCol];
        setNear(downNode, curtNode);
      }
      if (curtCol > 0) {
        leftNode = maps[curtRow][curtCol - 1];
        setNear(leftNode, curtNode);
      }
    }
    if (!endNode.parent) {
      console.error('路径查找失败');
      return [];
    }
    var path = [endNode];
    var parent = endNode.parent;
    while (parent) {
      path.push(parent);
      parent = parent.parent;
    }

    return path.reverse();
  };

  var row = data.row;
  var col = data.data.length / row;
  build(data.data);
  console.table(logMaps);
  var openList = [];
  var closeList = [];
  var startNode = getNode(inPos.row, inPos.col);
  var endNode = getNode(outPos.row, outPos.col);

  var path = findPath(startNode, endNode);

  for (var i = 0; i < path.length; i++) {
    console.log('[' + path[i].row + ',' + path[i].col + ']');
  }
}

start(map, { row: 0, col: 1 }, { row: 3, col: 4 });
