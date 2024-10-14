var stableMountains = function (height, threshold) {
  let arr = [];
  let i = 0;
  let j = 0;
  let n = height.length;
  for (i = 1; i < n; i++) {
    if (height[i - 1] > threshold) {
      arr[j++] = i;
    }
  }
  return arr;
};
let height = [1, 2, 3, 4, 5],
  threshold = 2;
console.log(stableMountains(height, threshold));
