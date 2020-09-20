function reduce(arr, callback, initialValue) {
  let acc = initialValue;

  return (() => {
    for (let index = 0; index < arr.length; index++) {
      acc = callback(acc, arr[index], index, arr);
    }

    return acc;
  })();
}

exports = reduce;
