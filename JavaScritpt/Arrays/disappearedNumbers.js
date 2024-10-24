var findDisappearedNumbers = function (nums) {
    let set = new Set();
   
    let arr = [];
    
    let n = nums.length;
    let j = 0;
  
    for (let i = 0; i < n; i++) {
      set.add(nums[i]);
    }
  
    for (let i = 1; i <= n; i++) {
      if (!set.has(i)) {
        arr[j++] = i;
      }
     
    }
    
    return arr;
  };
  
  let nums = [1, 1, 1, 1, 1, 1];
  console.log(findDisappearedNumbers(nums));