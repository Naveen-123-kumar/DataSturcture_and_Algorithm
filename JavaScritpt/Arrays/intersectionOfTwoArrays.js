var intersection = function (nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i]) && !arr.includes(nums2[i])) {
      arr.push(nums2[i]);
    }
  }
  return arr;
};
let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersection(nums1, nums2));
