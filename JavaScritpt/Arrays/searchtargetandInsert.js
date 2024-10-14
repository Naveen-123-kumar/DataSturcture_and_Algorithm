var searchInsert = function (nums, target) {
  let n = nums.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == target) {
      return i;
    }
    if (i < n && nums[i] > target) {
      return i;
    }
    if (i == n - 1 && nums[i] < target) {
      return n;
    }
  }
};
let nums = [1, 3, 5, 6],
  target = 5;
console.log(searchInsert(nums, target));
