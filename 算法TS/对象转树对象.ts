function change() {
  const obj = {
    '/a/b/c/d': 1,
    '/a/b/c/e': 1,
    '/a/b/c/d1': 1,
    '/a/b/c2/d': 1,
    '/a/b/c1': 1,
    '/a/b/c3': 1,
    '/a1/b/f': 1,
  };

  const newObj = {};
  for (const item in obj) {
    const newItem = item.split('/');
    newItem.shift();
    let swpObj = newObj;
    newItem.forEach((item, index, arr) => {
      if (swpObj[item]) {
        swpObj = swpObj[item];
      } else if (index < arr.length - 1) {
        swpObj[item] = {};
        swpObj = swpObj[item];
      } else {
        swpObj[item] = 1;
      }
    });
  }
  console.log(newObj);
}

change();
