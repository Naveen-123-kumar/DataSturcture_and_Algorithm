function FindDublicates(arr,n){
    
    arr.sort(function(a,b){
        return a-b;
    });
    for(let i=1;i<n;i++){
        if(arr[i]==arr[i-1]){
            return console.log('Dublicates found')
        }
        
    }
    return console.log('No Dublicates found');

}
var arr=[1,2,3,4,4,5,6,7]
let n=arr.length
FindDublicates(arr,n)