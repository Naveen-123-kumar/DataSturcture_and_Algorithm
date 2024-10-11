// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


const nums = [2, 7, 11, 15];
const target = 13;
function twoSum(nums, target) {
  let n = nums.length;
  console.log(n);
  let arr = [];
  let i;
  let j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i != j && nums[i] + nums[j] == target) {
        arr.push(i,j);
        console.log(i, j);
        return arr
      }
    }
  }
}
let result=twoSum(nums, target);
console.log(result)