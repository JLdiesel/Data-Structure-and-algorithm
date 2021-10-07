var setZeroes = function (matrix) {
  let a = [];
  let b = [];
  const l1 = matrix.length;
  const l2 = matrix[0].length;
  matrix.forEach((element, index) => {
    element.forEach((item, eleindex) => {
      if (item === 0) {
        a.push(eleindex);
        b.push(index);
      }
    });
  });
  a.forEach((item) => {
    for (let i = 0; i < l1; i++) {
      matrix[i][item] = 0;
    }
  });

  b.forEach((item) => {
    for (let i = 0; i < l2; i++) {
      matrix[item][i] = 0;
    }
  });
};
