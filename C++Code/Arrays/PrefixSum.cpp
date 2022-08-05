#include<iostream>
using namespace std;
int prefixSum(int arr[],int n,int start,int end){
    int sum=0;
    int i;
    for(i=1;i<n;i++){
        arr[i]=arr[i] +arr[i-1];
    }
    if(start!=0){
        return arr[end]-arr[start-1];
    }
    else{
        return arr[end];
    }
}
int main(){
    int arr[]={4,2,3,41,20,65};
    int n=sizeof(arr)/sizeof(arr[0]);
    cout<<prefixSum(arr,n,2,4)<<endl;
}