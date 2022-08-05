#include<iostream>
using namespace std;
int windowSliding(int arr[],int n,int k){
    int i;
    int result=0;
    for(i=0;i<n-1;i++){
        int sum=0;
        sum=sum+arr[i]+arr[i+1];
        result=max(result,sum);
    }
    return result;

}
int main(){
    int arr[]={-5,10,20,-50,23,52,68};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k;
    cout<<"Enter the value of k"<<endl;
    cin>>k;
    cout<<windowSliding(arr,n,k)<<endl;
}