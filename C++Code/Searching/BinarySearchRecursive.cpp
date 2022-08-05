#include<iostream>
#include<math.h>
using namespace std;
int binarySearchRecursive(int arr[],int start,int end,int k){
    
    
      if(start>end) return -1;
      int  mid=floor((end+start)/2);
      if(arr[mid]==k){
          return mid;
      }
      else if(arr[mid]<k){
          return binarySearchRecursive(arr,mid+1,end,k);
      }
      else{
          return binarySearchRecursive(arr,start,mid-1,k);
      }
    
   
}
int main(){
    int arr[]={1,2,4,5,8,10,25,34,36};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k;
    cout<<"Enter the value of k"<<endl;
    cin>>k;
    cout<<binarySearchRecursive(arr,0,n-1,k)<<endl;
    
}