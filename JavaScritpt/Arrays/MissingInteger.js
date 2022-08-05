function MissingNumber(arr,n){
    var i;
    var sum=((n+1)*(n+2))/2;
    for(i=0;i<n;i++){
        sum=sum - arr[i];
    }
    return sum;
}
var arr=[2,3,4,8,6,5,7]
var n=arr.length;
console.log(MissingNumber(arr,n))