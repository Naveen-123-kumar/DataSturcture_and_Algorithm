#include<iostream>
using namespace std;
int sumofCircularsubarray(int arr[],int n){
    int i;
    int result=0;
    for(i=0;i<n;i++){
        int sum=arr[i];
        int temTotal=arr[i];
        for(int j=1;j<n;j++){
             int index=(i+j)%n;
            sum=sum+arr[index];
            temTotal=max(temTotal,sum);
        }
        result=max(result,temTotal);
    }
    return result;
}
int main(){
    int arr[]={5,-2,3,4};
    int n=sizeof(arr)/sizeof(arr[0]);
    cout<<sumofCircularsubarray(arr,n)<<endl;

}