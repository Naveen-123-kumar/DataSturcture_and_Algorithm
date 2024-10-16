var merge = function (nums1, m, nums2, n) {
  let i;

  for (i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort(function (a, b) {
    return a - b;
  });
};
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
