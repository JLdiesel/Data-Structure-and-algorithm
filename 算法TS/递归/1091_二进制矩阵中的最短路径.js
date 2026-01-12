/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  function getShort(x, y, result) {
    if (
      x < 0 ||
      y < 0 ||
      x >= grid.length ||
      y >= grid[0].length ||
      grid[x][y] === 1
    ) {
      return -1;
    }
    if (x === grid.length - 1 && y === grid[0].length - 1) {
      return result + 1;
    }
    grid[x][y] = 1;
    const paths = [
      getShort(x + 1, y, result + 1),
      getShort(x - 1, y, result + 1),
      getShort(x, y + 1, result + 1),
      getShort(x, y - 1, result + 1),
      getShort(x + 1, y + 1, result + 1),
      getShort(x - 1, y - 1, result + 1),
      getShort(x + 1, y - 1, result + 1),
      getShort(x - 1, y + 1, result + 1)
    ];
    grid[x][y] = 0;
    const validPaths = paths.filter((path) => path !== -1);
    if (validPaths.length === 0) {
      return -1;
    }
    return Math.min(...validPaths);
  }
  return getShort(0, 0, 0);
};
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1;
  }
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [1, -1],
    [-1, 1]
  ];
  const queue = [];
  queue.push([0, 0, 1]);
  grid[0][0] = 1;
  while (queue.length) {
    const [x, y, pathLength] = queue.shift();
    if (x === n - 1 && y === n - 1) {
      return pathLength;
    }
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] === 0) {
        queue.push([nx, ny, pathLength + 1]);
        grid[nx][ny] = 1;
      }
    }
  }
  return -1;
};
