function Intersection(arr1, m, arr2, n) {
  let set1 = new Set();
  let set2 = new Set();
  for (let i = 0; i < m; i++) {
    set1.add(arr1[i]);
  }
  for (let i = 0; i < n; i++) {
    if (set1.has(arr2[i])) {
      set2.add(arr2[i]);
    }
  }
  console.log(set2);
}
var arr1 = [1, 5, 10, 20, 40, 80];
var arr2 = [6, 7, 20, 80, 100];

var n1 = arr1.length;
var n2 = arr2.length;

Intersection(arr1, n1, arr2, n2);
