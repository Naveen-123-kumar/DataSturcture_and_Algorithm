function N_thSmallest(arr, length, position) {
  var i, j, tem, index, k;
  tem = arr[length-1];

  for (i = 0; i < length - 1; i++) {
    for (j = i ; j < length; j++) {
      if (tem > arr[j]) {
        tem = arr[j];
        index = j;
      }
    }
    k = arr[i];
    arr[i] = arr[index];
    arr[index] = k;
    console.log(arr[index])
    if (i == position - 1) {
      break;
    }
  }
  return arr[position - 1];
}
var arr = [2, 3, 60, 20, 40, 23, 21];
var n = arr.length;
console.log("The Output is ", N_thSmallest(arr, n, 3));
