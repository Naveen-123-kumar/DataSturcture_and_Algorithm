#include<iostream>
using namespace std;
int maxProfit(int arr[],int n){
    int i;
    int profit=0;
    for(i=1;i<n;i++){
        if(arr[i-1] < arr[i] && arr[i] > arr[i+1]){
            profit=profit+(arr[i]-arr[i-1]);
        }
        else if(arr[i-1] < arr[i] && arr[i] < arr[i+1]){
            int j=i-1;
            while(arr[i-1]<arr[i] && i<n){
                i++;
            }
            profit=profit+(arr[i-1]-arr[j]);
        }
        else{
            continue;
        }
    }
    return profit;
}
int main(){
    int arr[]={2,3,8,45};
    int n=sizeof(arr)/sizeof(arr[0]);
    cout<<maxProfit(arr,n)<<endl;
}