
var majorityElement = function (nums) {
    nums.sort(function (a, b) { return a - b })
    let n = nums.length;
    let totalcount = 0;
    let prevcount = 0
    let value;

    for (let i = 0; i < n; i++) {
        let tem = nums[i]
        totalcount = 1;
        for (let j = i+1; j < n; j++) {
            if (nums[j] == tem) {
                totalcount = totalcount + 1
                i++;
            }
         
        }
        if(prevcount<totalcount){
            prevcount=totalcount;
            value=tem;
        }
    }
    return value;

};
let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))