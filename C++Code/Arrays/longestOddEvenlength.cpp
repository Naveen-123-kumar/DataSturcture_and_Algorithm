#include<iostream>
using namespace std;
int longestOddEvenlength(int arr[],int n){
    int i;
    int result=0;
    int length=0;
    for(i=2;i<n;i++){
        if(arr[i-2]%2==0 && arr[i-1]%2!=0 && arr[i]%2==0){
            length=length+1;
        }
        else if(arr[i-2]%2!=0 && arr[i-1]%2==0 && arr[i]%2!=0){
            length=length+1;
        }
        else{
        result=max(result,length);

            length=0;
        }
    }
        result=max(result,length);
    
    return result+2;
}
int main(){
    int arr[]={10,12,14,7,8};
    int n=sizeof(arr)/sizeof(arr[0]);
    cout<<longestOddEvenlength(arr,n)<<endl;


}