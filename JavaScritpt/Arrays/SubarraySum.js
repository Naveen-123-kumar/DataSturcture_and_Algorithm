function FindSubarray(arr,n){
    let set=new Set();
    let i;
    var sum=0;
    for(i=0; i < n;i++){
        sum=sum+arr[i];
        if(sum==0 || set.has(sum)){
            return true;
        }
        set.add(sum);

    }
    return false;
}
const arr =  [-3, 2, 3, -5, 6];
let n=arr.length
console.log(FindSubarray(arr,n))