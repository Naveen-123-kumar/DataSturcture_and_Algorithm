function BinarySearch(arr,Target,l,r){
    if(r >l ){
        let mid=l+Math.floor((r-l)/2);
    if(arr[mid]==Target){
        return mid;
    }
    else if(arr[mid]<Target){
        return BinarySearch(arr,Target,mid+1,r)
    }
    else{
        return BinarySearch(arr,Target,l,mid-1)
    }
}

}
let arr = [ 2, 3, 4, 10, 40,2 ];
let n = arr.length

//linear search
for(let i=0;i<n;i++){
    if(arr[i]==4){
        console.log('Find')
        return
    }
}
console.log(arr)
