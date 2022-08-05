#include<iostream>
using namespace std;
int findElement(int arr[],int n,int target){
     int low=0;
     int tem=-1;
     int high=n-1;
     while(low<=high){
          int mid=(low+high)/2;
          if(arr[mid]==target){
               return mid;
          }
          if(arr[low]<arr[mid]){
               if(target>=arr[low] && target<arr[mid]){
                    high=mid-1;
               }
               else{
                    low=mid+1;
               }
          }
          else{
               if(target > arr[mid] && target <= arr[high]){
                    low=mid+1;
               }
               else{
                    high=mid-1;
               }
          }
     }
return tem;
}
int main(){
     int arr[]={11,102,103,104,108,1,2};
     int target=102;
     int n=sizeof(arr)/sizeof(arr[0]);
     cout<<findElement(arr,n,target)<<endl;

}