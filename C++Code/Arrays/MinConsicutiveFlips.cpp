#include<iostream>
using namespace std;
int flipCounts(int arr[],int n){
    int i;
    int count=0;
    int tem=arr[0];
    for(i=0;i<n;i++){
        if(arr[i] != tem){
            while(arr[i]!=tem){
                i++;
            }
            count++;
        }
    }
    return count;
}
int main(){
int arr[]={0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0};
int n=sizeof(arr)/sizeof(arr[0]);
cout<<flipCounts(arr,n)<<endl;
}