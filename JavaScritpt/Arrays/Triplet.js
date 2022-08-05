function FindTriplet(arr,n,target){
    let i,j;
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            let k=j+1
            while(k<n){
            if(arr[j]+arr[k]+arr[i]===target){
                return console.log('Target found')
            }
            k=k+1
           
        }

        }
    }
    return console.log('Not found')
}
const arr =  [1, -4, 45, 6 ,10, 8]
let n=arr.length
FindTriplet(arr,n,13)