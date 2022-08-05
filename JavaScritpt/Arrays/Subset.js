function FindSubset(arr1, arr2, m, n) {
  let i, j;
  let total=0;
  var set = new Set();
  for (i = 0; i < m; i++) {
    set.add(arr1[i]);
  }
  for (j = 0; j < n; j++) {
    if (set.has(arr2[j])) {
      total=total+1;
    }
  }
  if(total==n){
      return console.log('found')
  }
  return console.log('Not found')
}
arr1 = [11, 1, 13, 21, 30, 7];
arr2 = [11, 30, 7, 1];
let m = arr1.length;
let n = arr2.length;
FindSubset(arr1, arr2, m, n);
