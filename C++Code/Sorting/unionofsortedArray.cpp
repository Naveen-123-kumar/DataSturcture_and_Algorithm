#include<iostream>
using namespace std;
void unionofArray(int arr1[],int arr2[],int n1,int n2){
    int i=0,j=0,k=0;
    while(i<n1 && j<n2){
        if(arr1[i]>arr2[j] && (arr2[j]!=arr2[j-1])){
            cout<<arr2[j]<<endl;
            j++;
        }
        else if(arr1[i] < arr2[j] || (arr1[i]!=arr1[i-1])){
            cout<<arr1[i]<<endl;
            i++;
        }
        else{
            // cout<<arr1[i]<<endl;
            j++;
            i++;
        }
    }
}
int main(){
    int arr1[]={10,12,15,15,20,20};
    int arr2[]={11,15,15,20,20};
    int n1=sizeof(arr1)/sizeof(arr1[0]);
    int n2=sizeof(arr2)/sizeof(arr2[0]);
    unionofArray(arr1,arr2,n1,n2);
}