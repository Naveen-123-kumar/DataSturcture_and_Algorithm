function Friquency(arr,num,n){
    var i,count=0;
    for(i=0;i<n;i++){
        if(arr[i]==num){
            count=count+1;
        }
    }
    return count;
}
var arr=[1,1,1,1,1,2,2]
var n=arr.length;
console.log(Friquency(arr,2,n));