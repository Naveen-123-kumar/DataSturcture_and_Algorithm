function CountPairs(arr,n,Target){
    var count=0;
    for(let i=0;i<n-1;i++){
        let tem=arr[i];
        for(let j=i+1;j<n;j++){
            if(tem+arr[j]==Target){
                count=count+1;
            }
        }
    }
    return count;
}
var arr=[2,5,3,2,4,6,1];
var n=arr.length;
console.log(CountPairs(arr,n,7))