function SpiralMatrix(arr) {
  let row = arr.length;
  let col = arr[0].length;
  let x = 0;
  let y = 0;
  var tem = "";
  while (row > 0 && col > 0) {
    if (row == 1) {
      for (let i = 0; i < col; i++) {
        tem=tem+(arr[x][y++]) +" ";
      }
      break;
    } else if (col == 1) {
      for (let i = 0; i < row; i++) {
        tem=tem+(arr[x++][y]) +" ";
      }
      break;
    } else {
      for (let i = 0; i < col-1; i++) {
        tem=tem+(arr[x][y++]) +" ";

      }
      for (let i = 0; i < row-1; i++) {
        tem=tem+(arr[x++][y]) +" ";

      }
      for (let i = 0; i < col-1; i++) {
        tem=tem+(arr[x][y--]) +" ";

      }
      for (let i = 0; i < row-1; i++) {
        tem=tem+(arr[x--][y]) +" ";

      }
    }
    x++
    y++
    row=row-2
    col=col-2
  }
  return tem
}
let arr= [[1,2,3],[4,5,6],[7,8,9]]
console.log(SpiralMatrix(arr))
