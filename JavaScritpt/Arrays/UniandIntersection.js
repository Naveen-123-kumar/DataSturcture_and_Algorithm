function findUnion(arr1, arr2, m, n) {
  let set = new Set();
  let len = 0;
  for (let i = 0; i < m; i++) {
    set.add(arr1[i]);
    len++;
  }
  for (let i = 0; i < n; i++) {
    set.add(arr2[i]);
  }

  console.log(set);
}
arr1 = [11, 1, 13, 21, 30, 7];
arr2 = [101, 300, 7, 111];
let m = arr1.length;
let n = arr2.length;
findUnion(arr1, arr2, m, n);
