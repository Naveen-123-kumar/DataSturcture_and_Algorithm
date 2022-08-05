#include<iostream>
using namespace std;
bool sorted(int arr[],int n){
    int i;
    for(i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}
int main(){
    int arr[] = {20, 3, 4, 8, 9, 60, 80, 120};
    int n = sizeof(arr) / sizeof(arr[0]);
    int x=sorted(arr, n);
    if(x==0){
    cout << "False" << endl;

    }
    else{
        cout<<"True"<<endl;
    }
}