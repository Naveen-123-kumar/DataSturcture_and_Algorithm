// function insertionSort(arr, n)
// {
//     let i, key, j;
//     for (i = 1; i < n; i++)
//     {
//         key = arr[i];
//         j = i - 1;

//         /* Move elements of arr[0..i-1], that are
//         greater than key, to one position ahead
//         of their current position */
//         while (j >= 0 && arr[j] > key)
//         {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }

// // A utility function to print an array of size n
// function printArray(arr, n)
// {
//     let i;
//     for (i = 0; i < n; i++)
//         console.log(arr[i])
// }

// // Driver code
//     let arr1 = [12, 11, 13, 5, 60 ];
//     let n = arr1.length;

//     insertionSort(arr1, n);
//     printArray(arr1, n);

// // This code is contributed by Mayank Tyagi
// function insertionSort(arr) {
//   let i, j, tem;
//   let n = arr.length;
//   for (i = 1; i < n; i++) {
//     tem = arr[i];
//     j = i - 1;
//     while (j >= 0 && arr[j] > tem) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = tem;
//   }
// }
// function printArray(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
//   }
// }
var arr1 = [9, 3, 19, 12, 35, 1];
let n = arr1.length;
insertionSort(arr1);
printArray(arr1);
function swap(arr, i, j) {
  let tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
}
// function SelectionSort(arr,n){
//     var i,j,tem,min_index;
//     for(i = 0; i < n-1; i++){
//         min_index=i;
//         for(j=i+1;j<n;j++){

//             if(arr[min_index]>arr[j])
//             {
//                 min_index=j;
//             }
//         }
//         swap(arr,i,min_index);

//     }
// }
function SelectionSort(arr, n) {
  var i, j, tem, min_index;
  for (i = 0; i < n - 1; i++) {
    min_index = i;
    tem=arr[min_index];

    for (j = i + 1; j < n; j++) {
      if (tem > arr[j]) {
        min_index = j;
        tem = arr[j];
      }
    }
    swap(arr, i, min_index);
  }
}
function BubbleSort(arr,n){
    var i,j;
    for(i=0;i<n;i++){
        for(j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let tem=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tem;
            }

        }
    }
}
function printArray(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
}
var arr1 = [9, 3, 19, 12, 35, 1];
// let n = arr1.length;
// BubbleSort(arr1, n);
SelectionSort(arr1, n);

printArray(arr1, n);
