#include<iostream>
using namespace std;
int search(int arr[],int target,int n){
   
    for(int i=0;i<n;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;

}
int main(){
    
    int arr[]={5,6,8,9,8};
     int n = sizeof(arr) / sizeof(arr[0]);
    int target=9;
    int result=search(arr,target,n);
    if(result==-1){
        cout<<"Target is not available"<<endl;
    }
    else{
        cout<<result<<endl;
    }
}