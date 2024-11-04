var arrayPairSum = function (nums) {
  let n = nums.length;
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  let result = 0;
  for (let i = 0; i < n; i += 2) {
    result = result + nums[i];
  }
  return result;
};
let nums = [1, 4, 3, 2];
arrayPairSum(nums);
