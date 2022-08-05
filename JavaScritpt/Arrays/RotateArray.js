function RotateArray(arr,n){
    var i,tem,j;
    for(i=n-1;i>0;i--){

        tem=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=tem;


    }
    
    return arr;
}
let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
console.log(RotateArray(arr,n));
