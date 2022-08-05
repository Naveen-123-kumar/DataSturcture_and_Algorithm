#include<iostream>
using namespace std;
int index(int arr[],int num){
    int low=-1;
    int i=0;
    if(arr[0]==num){
        return 0;
    }
    while(arr[i]<=num){
        if(arr[i]==num){
            return i;
        }
        else{
         i++;
        }
    }
   return low;

}
int main(){
    int arr[]={1,2,11,102,103,104,108,160};
    int n=11;
    cout<<index(arr,n)<<endl;
}