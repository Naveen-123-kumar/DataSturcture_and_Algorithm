#include<iostream>
using namespace std;
int findsum_pair(int arr[], int n, int result)
{
    int start = 0;
    int end = n - 1;
    int res=-1;
    // bool true;
    while (start < end)
    {
        if (arr[start] + arr[end] == result)
        {
            res= result;
        }
        else if (arr[start] + arr[end] > result)
        {
            end--;
        }
        else
        {
            start++;
        }
    }
    // cout<<'Not found'<<endl;
    return res;
}
int main()
{
    int arr[] = {2, 3, 4, 21, 45, 68, 70, 200};
    int n = sizeof(arr)/sizeof(arr[0]);
    int result=21;
    cout<<findsum_pair(arr,n,result)<<endl;
}