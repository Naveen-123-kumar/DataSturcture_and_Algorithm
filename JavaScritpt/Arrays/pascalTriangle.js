var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let arr = new Array(i+1).fill(1);
    for (let j = 1; j < i; j++) {
        arr[j]=result[i-1][j-1]+result[i-1][j]
    }
    result.push(arr)
  }
  console.log(result);
};

// generate(5);

var getRow = function (rowIndex) {
  let result = []
  for (let i = 0; i <= rowIndex; i++) {
      let arr = new Array(i + 1).fill(1);
      for (let j = 1; j < i; j++) {
          arr[j]=result[i-1][j]+result[i-1][j-1]
      }
      result.push(arr)
  }
  return result[rowIndex];
};
console.log(getRow(3))