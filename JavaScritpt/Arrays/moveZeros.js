const moveZeroes = function (nums) {
 let currentindex=0;
 let n=nums.length;
 for(let i=0;i<n;i++){
    if(nums[i]!==0){
        nums[currentindex++]=nums[i]
    }
 }
 for(let j=currentindex;j<n;j++){
    nums[j]=0
 }
 return nums
};
let nums = [0, 1];
let result = moveZeroes(nums);
console.log(result);
