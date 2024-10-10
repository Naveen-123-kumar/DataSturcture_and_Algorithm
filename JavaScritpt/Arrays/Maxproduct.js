var number=[2,30,4,5,-1];
number.sort(function(a,b){return a-b})
var n=number.length;
for(let i=0; i<n; i++){
    console.log(number[i])
}
let product =1;
for(let i=n-1;i>=n-3;i--){
product =product*number[i];
}
console.log("The final product of three largest number is", product)

function max_Product(arr,n){
    let result
    for(let i=0;i<n;i++){
        let subarray=arr.slice(i,i+3)
        
    }
}
