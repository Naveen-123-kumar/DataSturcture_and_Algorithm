#include<iostream>
using namespace std;
int subsetsum(int arr[],int sum,int n){
    if(n==0) { 
        return (sum==0)?1:0;
        }
        return subsetsum(arr,sum,n-1) || subsetsum(arr,sum-arr[n-1],n-1);
}
int main(){
    int set[] = { 3, 34, 4, 12, 5, 2 };
    int sum = 9;
    int n = sizeof(set) / sizeof(set[0]);
    if (subsetsum(set, sum,n) == true)
         cout <<"Found a subset with given sum";
    else
        cout <<"No subset with given sum";
    return 0;
}