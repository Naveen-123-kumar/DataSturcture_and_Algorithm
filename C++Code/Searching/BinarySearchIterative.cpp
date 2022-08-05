#include<iostream>
#include<math.h>
using namespace std;
int binarySearchiterative(int arr[],int n,int k){
    int tem;
    int start=0;
    int end=n-1;
    while(start<=end){
      int  mid=floor((end+start)/2);
      if(arr[mid]==k){
          return mid;
      }
      else if(arr[mid]<k){
          start=mid+1;
      }
      else{
          end=mid-1;
      }
    }
   
}
int main(){
    int arr[]={1,2,4,5,8,10,25,34,36};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k;
    cout<<"Enter the value of k"<<endl;
    cin>>k;
    cout<<binarySearchiterative(arr,n,k)<<endl;
    
}