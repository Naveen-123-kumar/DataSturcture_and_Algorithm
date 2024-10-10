var arr=[8000,12,100,2,78000,3000,1];
var n=arr.length;
var min_index,j,i;
// // min_index=arr[i];
// min_index=arr[0]
// for(let i=0;i<n;i++){
//     // console.log(min_index)
//     if(min_index > arr[i+1]){
//         min_index=arr[i+1];
//     }
// }
min_index=arr[0]
for(let i=0;i<n;i++){
    if(min_index< arr[i]){
        min_index=arr[i]
    }
}
console.log(min_index)
