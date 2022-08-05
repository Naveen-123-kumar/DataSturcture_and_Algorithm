function Reverse(arr,n){
    let reverse=" ";
    for(let i=n-1;i>=0;i--){
        reverse=reverse+arr[i]
    }
    console.log(reverse)
}
const arr="singh"
let n=arr.length;
Reverse(arr,n)