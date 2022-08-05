#include<iostream>
using namespace std;
int removeDublicate(int arr[],int n){
    int tem[n];
    int i;
    int j=0;
    for(i=0;i<n-1;i++){
        if(arr[i]!=arr[i+1]){
            tem[j++]=arr[i];
        }
    }
    tem[j++]=arr[n-1];
    for(i=0;i<j;i++){
        arr[i]=tem[i];
    }
    return j;
}
int main(){
    int arr[]={1,2,2,3,3,4,5,6,6,7,8,9};
    int n=sizeof(arr)/sizeof(arr[0]);
    int result=removeDublicate(arr,n);
    for(int i=0;i<result;i++){
        cout<<arr[i]<<" "<<endl;
    }
}