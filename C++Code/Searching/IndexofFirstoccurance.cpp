#include<iostream>
#include<math.h>
using namespace std;
int indexofFirst(int arr[],int start,int end,int k){
    if(start>end) { return -1;}
    
    int mid=floor((start+end)/2);
    if(arr[mid]<k){
        return indexofFirst(arr,mid+1,end,k);
    }
    else if(arr[mid]>k){
        return indexofFirst(arr,start,mid-1,k);
    }
    else{
        if(arr[mid]==k && arr[mid]!=arr[mid-1]){
            return mid;
        }
        else{
            return indexofFirst(arr,start,mid-1,k);
        }
    }
    return mid;
}
int main(){
    int arr[]={1,2,10,10,30,40,50,60};
    int n=sizeof(arr)/sizeof(arr[0]);
    cout<<(indexofFirst(arr,0,n-1,10))<<endl;
}