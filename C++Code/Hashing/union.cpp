#include<iostream>
using namespace std;
#include<unordered_set>
int find_union(int arr1[],int arr2[],int n,int m){
    unordered_set<int> s;
    for(int i=0;i<n;i++){
        s.insert(arr1[i]);
    }
    for(int i=0;i<m;i++){
        s.insert(arr2[i]);
    }
    return s.size();
}
int main(){
    int arr1[]={2,3,4,5,5,4};
    int arr2[]={7,9,62,12,5,5,7};
    int n1=sizeof(arr1)/sizeof(arr1[0]);
    int n2=sizeof(arr2)/sizeof(arr2[0]);
    cout<<find_union(arr1,arr2,n1,n2)<<endl;
}