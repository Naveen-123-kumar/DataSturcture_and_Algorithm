#include<iostream>
using namespace std;
void selectionSort(int arr[],int n){
int i,j,tem,index;
for(i=0;i<n-1;i++){
    int minValue=arr[i];
    for(j=i;j<n;j++){
        if(minValue>arr[j]){
            minValue=arr[j];
            index=j;
        }

    }
    tem=arr[i];
    arr[i]=minValue;
    arr[index]=tem;
}
for(int k=0;k<n;k++){
    cout<<arr[k]<<endl;
}
}


int main(){
    int arr[]={9,1,55,3,41,44};
    int n=sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr,n);
}