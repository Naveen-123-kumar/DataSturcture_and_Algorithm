function maxProduct(arr,n){
    let i
    let result=arr[0]
    var product
    for(i=0;i<n;i++){
        product=arr[i]
        for(j=i+1;j<n;j++){
            product=product*arr[j];
            result=Math.max(product,result)
        }
        result=Math.max(product,result)
        
        
    }
    return result;

}
var arr=[0,8,-1,5,-7,3,-2]
var n=arr.length
console.log(maxProduct(arr,n))