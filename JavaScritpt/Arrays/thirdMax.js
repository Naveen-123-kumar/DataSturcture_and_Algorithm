// var thirdMax = function (nums) {
//   let set = new Set();
//   let count = 0;
//   let tem = [];
//   for (let i = 0; i < nums.length; i++) {
//     set.add(nums[i]);
//   }
//   tem = [...set];
//   console.log(tem);
//   let n = tem.length;
//   if (n > 2) {
//     tem.sort(function (a, b) {
//       return b - a;
//     });
//     return tem[2];
//   } else {
//     tem.sort(function (a, b) {
//       return a - b;
//     });
//     return tem[n - 1];
//   }
// };
var thirdMax = function (nums) {
  let n = nums.length;
  let i,
    j = 0;
  nums.sort(function (a, b) {
    return b - a;
  });
  max = nums[0];
  for (let i = 0; i < n; i++) {
    if (nums[i] != nums[i + 1]) {
      j++;
    }
    if (j == 2) {
      max = nums[i + 1];
    }
  }
  return max;
};
let nums = [1, 2];
thirdMax(nums);
