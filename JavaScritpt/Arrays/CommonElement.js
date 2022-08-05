function CommonElement(arr1, arr2, arr3, n1, n2, n3) {
  let i = 0,
    j = 0,
    k = 0;
  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      console.log(arr1[i] + " ");
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) i++;
    // y < z
    else if (arr2[j] < arr3[k]) j++;
    // We reach here when x > y and z < y, i.e., z is smallest
    else k++;
  }
}
var arr1 = [1, 5, 10, 20, 40, 80];
var arr2 = [6, 7, 20, 80, 100];
var arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
var n1 = arr1.length;
var n2 = arr2.length;
var n3 = arr3.length;

CommonElement(arr1, arr2, arr3, n1, n2, n3);
