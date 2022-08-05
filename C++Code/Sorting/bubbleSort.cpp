#include<iostream>
using namespace std;
int* bubbleSort(int arr[],int n){
    int i,j;
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                int swap=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=swap;  
            }
        }
    }
    return arr;
}
int main(){
    int arr[]={9,1,55,3,41,44};
    int n=sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr,n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<endl;
    }
}