// var containsDuplicate = function (nums) {
//   nums = nums.sort(function (a, b) {
//     return a - b;
//   });
//   let n = nums.length;
//   for (let i = 0; i < n - 1; i++) {
//     if (nums[i] == nums[i + 1]) {
//       return "true";
//     }
//   }
//   return "false";
// };
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
};
let nums = [1, 2, 3, 4, 1, 1];
console.log(containsNearbyDuplicate(nums, 1));
