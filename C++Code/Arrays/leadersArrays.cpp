#include<iostream>
using namespace std;
void findLeaders(int arr[],int n){
    int tem[100];
    int i;
    int k=0;
    for(i=0;i<n;i++){
        int a=arr[i];
        for(int j=i+1;j<n;j++){
            if(a>arr[j] && j==n-1){
             tem[k++]=arr[i];
            }
        }
    }
    tem[k++]=arr[n-1];
    for(i=0;i<k;i++){
        cout<<tem[i]<<endl;
    }
}
int main(){
    int arr[]={5,200,4,20,15,3,8};
    int n=sizeof(arr)/sizeof(arr[0]);
    findLeaders(arr,n);
    
}