var intersect = function (nums1, nums2) {
  nums1 = nums1.sort(function (a, b) {
    return a - b;
  });
  nums2 = nums2.sort(function (a, b) {
    return a - b;
  });
  let n = nums1.length;
  let m = nums2.length;
  let arr = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < n && j < m) {
    if (nums1[i] == nums2[j]) {
      arr[k++] = nums1[i];
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return arr;
};
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersect(nums1, nums2));