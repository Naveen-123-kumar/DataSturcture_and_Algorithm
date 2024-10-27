var findMaxConsecutiveOnes = function (nums) {
  let n = nums.length;
  let count = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] != 0) {
      count = count + 1;
    } else {
      count = 0;
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
};
let nums = [1, 1, 0, 1, 1, 1];
findMaxConsecutiveOnes(nums);
