#include<iostream>
using namespace std;
int* moveZero(int arr[],int n){
    int i=0;
    int last=n-1;
    while(i<last){
        if(arr[i]==0 && arr[last]!=0){
            swap(arr[i],arr[last]);
            i++;
            last--;
        }
        else if(arr[i]==0 && arr[last]==0){
            last--;
        }
        else if(arr[i]!=0 && arr[last]==0){
                i++;
                last--;
        }
        else{
                i++;
        }
    }
    return arr;

}
void swap(int a,int b){
    int tem=a;
    a=b;
    b=tem;
    return;
}
int main(){
    int arr[]={10,20,0,10,1,2,0,3};
    int n=sizeof(arr)/sizeof(arr[0]);
    moveZero(arr,n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" "<<endl;
    }

}