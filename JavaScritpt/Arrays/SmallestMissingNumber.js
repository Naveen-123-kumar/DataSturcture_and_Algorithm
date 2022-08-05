function MissingNumber(arr,n){
    arr.sort(function(a,b){ return a-b})
    let i,j;
    j=arr[0];
    var set =new Set()
    for(i=0;i<n-1;i++){
        set.add(arr[i])
        if(j>arr[i+1]){
            j=arr[i+1]
        }
    }
    console.log(j)
    while(i<n){
        if(!set.has(j+1)){
        }
        j=j+1
        i=i+1
    }
    
    
}
arr = [11, 10, 13, 21, 30, 70];

let n = arr.length;
MissingNumber(arr,n)