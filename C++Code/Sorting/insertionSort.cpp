#include<iostream>
using namespace std;
void insertionSort(int arr[],int n){
int i,j,tem,index;
for(i=1;i<n;i++){
    int tem=arr[i];
    j=i-1;
    while(tem<arr[j] && j>=0){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=tem;   
}
for(int k=0;k<n;k++){
    cout<<arr[k]<<endl;
}
}
int main(){
    int arr[]={9,1,55,3,41,44};
    int n=sizeof(arr)/sizeof(arr[0]);
    insertionSort(arr,n);
}