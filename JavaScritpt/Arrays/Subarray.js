function Subarray(arr,sum,n){
    var i,Total=0;
    for(i=0;i<n;i++){
        Total=arr[i];
        for(let j=i+1;j<=n;j++){
            if(Total==sum){
                return console.log(i+""+(j));
            }      
            if(Total>sum || j==n){
                    break;            }
            
            Total=Total+arr[j];
                
    
    }
}
return console.log('Not Found')
}
let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
Subarray(arr, n, sum);