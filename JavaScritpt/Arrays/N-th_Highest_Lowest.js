var arr = [2, 3, 60, 20, 40, 23, 21];
var n = arr.length;
console.log("The Output is ", NthMax(arr, 6, n));
function NthMax(arr, position, length) {
  var i, j, k, tem, index;
  for (i = 0; i < length - 1; i++) {
    tem = arr[i];
    for (j = i + 1; j < length; j++) {
      if (tem < arr[j]) {
        tem = arr[j];
        index = j;
      }
    }
    k = arr[i];
    arr[i] = arr[index];
    arr[index] = k;

    if (i == position - 1) {
      break;
    }
  }
  return arr[position - 1];
}
