#include <iostream>
using namespace std;
int maxDifference(int arr[], int n)
{
    int i;
    int j;
    int diff=0;
    for (i = 0; i < n; i++)
    {
        for(int j=i+1;j<n;j++){
            int d=(arr[j]-arr[i]);
            if(diff<d){
                diff=d;
            }
        }
    }
    return diff;
}
int main()
{
    int arr[] = {8, 9, 10, 4, 5, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout<<maxDifference(arr,n)<<endl;
}