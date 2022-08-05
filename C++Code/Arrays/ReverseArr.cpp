#include<iostream>
using namespace std;
int* reverseArr(int arr[],int n){
int i=0;
int j=n-1;
while(i<j){
    int tem=arr[i];
    arr[i]=arr[j];
    arr[j]=tem;
    i++;
    j--;
}
return arr;
}
void printArray(int arr[],int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<' '<<endl;
    }
}
int main(){
    int arr[] = {20, 5, 4, 8, 9, 60, 8, 12};
    int n = sizeof(arr) / sizeof(arr[0]);
    reverseArr(arr, n);
    printArray(arr,n);
}