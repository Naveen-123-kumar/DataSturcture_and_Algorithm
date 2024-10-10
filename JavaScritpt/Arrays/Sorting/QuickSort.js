function Swap(arr,i,j){
    var tem=arr[i];
    arr[i]=arr[j];
    arr[j]=tem;
}
function Partition(arr,low,high){
    var pivot=arr[high];
    var i=low-1;
    for(let j=low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            Swap(arr,i,j);
        }
    }
    Swap(arr,i+1,high)
    return (i+1);
}
function QuickSort(arr,low,high){
    if(low<high){
    var pi=Partition(arr,low,high);
    QuickSort(arr,low,pi-1);
    QuickSort(arr,pi+1,high);
}
}
function printArray(arr,n){
    for(let i=0;i<n;i++){
        console.log(arr[i]);
    }
}
var arr = [ 10, 7, 8, 9, 1, 5 ];
    var n = arr.length;
     
    QuickSort(arr, 0, n-1);
   
    printArray(arr, n);

function Pivot(arr,low,high){
    let pivot=arr[high]
    let i=low -1
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            Swap(arr,i,j)
        }
    }
    Swap(arr,i+1,high)
    return i+1;

}
    function QuickSort1(arr,low,high){
        if(low<high){
            let pi=Pivot(arr,low,high)
            QuickSort1(arr,low,pi-1)
            QuickSort1(arr,pi+1,high)
        }
    }