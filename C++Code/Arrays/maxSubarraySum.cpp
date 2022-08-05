#include<iostream>
using namespace std;
int subArraysum(int arr[],int n){
    int i;
    int j;
    int result=INT_MIN;
    for(i=0;i<n;i++){
        int sum=0;
        for(j=i;j<n;j++){
             sum=sum+arr[j];
            if(sum>result){
                result=sum;
            }        
        }
        cout<<result<<endl;
    }
    return result;
}
int main(){
    // int arr[]={2, 3,-8, 7, -1, 2,3};
    int arr[]={-2, -3, 4, -1, -2, 1, 5, -3};
    int n=sizeof(arr)/sizeof(arr[0]);
    cout<<subArraysum(arr,n)<<endl;
}