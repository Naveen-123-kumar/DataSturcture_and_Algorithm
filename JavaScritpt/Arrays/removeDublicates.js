var removeElement = function(nums, val) {
    let n=nums.length;
    let j=0
    for(let i=0;i<n;i++){
        if(nums[i] != val){
            nums[j++]=nums[i]
        }
    }
    return j;
};

var removeDuplicates = function(nums) {
    let j=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(nums[i] !=nums[i+1]){
            nums[j++]=nums[i]
        }
    }
    return j
    
};

console.log("removeElement", removeElement([3,2,2,3,4],3));
