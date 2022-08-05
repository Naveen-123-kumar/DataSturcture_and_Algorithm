#include<iostream>
using namespace std;
int* deleteAtIndex(int arr[],int n,int target){
    int i;
    int index;
    for(i=0;i<n;i++){
        if(arr[i]==target){
            break;
        }
    }
    for(int j=i;j<n-1;j++){
        arr[j]=arr[j+1];
    }
    n=n-1;
 return arr;

}
int main(){
    int arr[]={5,4,6,1,8,69,12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int target=8;
    deleteAtIndex(arr,n,target);
    for(int i=0;i<n-1;i++){
        cout<<arr[i]<<' ';
        cout<<endl;
    }

}