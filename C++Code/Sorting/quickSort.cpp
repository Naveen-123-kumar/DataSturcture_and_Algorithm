#include<iostream>
using namespace std;
int partition(int arr[],int low,int high)
{
    int pivot=arr[high-1];
    int j=low-1;
    for(int i=low;i<high;i++){
        if(pivot>arr[i]){
            j++;
            int tem=arr[j];
            arr[j]=arr[i];
            arr[i]=tem;
        }
    }
    int tem=arr[j+1];
    arr[j+1]=arr[high-1];
    arr[high-1]=tem;
    return j+1;
}
void quickSort(int arr[],int low,int high){
       if (low < high)
    {  
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int main(){
    int arr[]={9,1,55,3,41,44};
    int n=sizeof(arr)/sizeof(arr[0]);
    quickSort(arr,0,n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<endl;
    }
}