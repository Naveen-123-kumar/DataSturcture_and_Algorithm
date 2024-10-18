var singleNumber = function (nums) {
  let newSet = new Set();
  let newSet2 = new Set();

  nums = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (!newSet.has(nums[i])) {
      newSet.add(nums[i]);
      // console.log("newSet", newSet);
    } else {
      newSet2.add(nums[i]);
      // console.log("newSet2", newSet2);
    }
  }
  return Array.from(newSet).filter((item) => !newSet2.has(item))[0];
};
let arr = [1, 3, 3, 3, 4, 4, 5, 5];

console.log(singleNumber(arr));
