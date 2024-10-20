var missingNumber = function (nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};
let arr = [0,1, 3, 4];
console.log(missingNumber(arr));
