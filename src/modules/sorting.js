const sorting = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let tempmin = Infinity;
    let tempj = 0;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i].score < arr[j].score) {
        tempmin = arr[i].score;
        tempj = j;
      }
    }
    if (tempj > 0) [arr[i], arr[tempj]] = [arr[tempj], arr[i]];
  }
};

export default sorting;