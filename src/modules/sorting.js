const sorting = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let tempmax = Number(arr[i].score);
    let tempj = 0;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (tempmax < Number(arr[j].score)) {
        tempmax = Number(arr[j].score);
        tempj = j;
      }
    }
    if (tempj > 0) {
      [arr[i], arr[tempj]] = [arr[tempj], arr[i]];
    }
  }
  return arr;
};

export default sorting;