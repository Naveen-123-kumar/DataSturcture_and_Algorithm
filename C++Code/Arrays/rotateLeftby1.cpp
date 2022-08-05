#include<iostream>
using namespace std;
int* rotateByN(int arr[],int n,int k){
    int i;
    int j=0;
    while(j<k)
    {
    int tem=arr[0];
    for(i=0;i<n-1;i++)
    {
        arr[i]=arr[i+1];

    }
    arr[n-1]=tem;
    j++;
    }
    return arr;

}
int main(){
    int arr[]={1,2,9,3,5,6,9};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k=3;
    rotateByN(arr,n,k);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" "<<endl;
    }

}
