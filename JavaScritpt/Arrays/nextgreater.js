let getIndex = (num, nums2, n2) => {
  for (let i = 0; i < n2; i++) {
    if (nums2[i] == num) {
      return i;
    }
  }
};
var nextGreaterElement = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let result = [];
  let k = 0;
  for (let i = 0; i < n1; i++) {
    let tem = nums1[i];
    let index = getIndex(tem, nums2, n2);
    let flag = true;
    for (let j = index + 1; j < n2; j++) {
      if (nums2[j] > tem) {
        result[k++] = nums2[j];
        flag = false;
        break;
      }
    }
    if(flag){
      result[k++]=-1
    }

    
  }
  return result;
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
// nextGreaterElement(nums1, nums2);
console.log(nextGreaterElement(nums1, nums2));
