#include<iostream>
using namespace std;
int largestnumber(int arr[], int n)
{
    int i;
    int temNumber1 = 0;
    for (i = 0; i < n; i++)
    {
        if (arr[temNumber1] < arr[i])
        {
            temNumber1 = i;
        }
    }
    return temNumber1;
}
int secondLargestnumber(int arr[],int n){
    int largest_index=largestnumber(arr,n);
    int i;
    int temNumber = 0;
    for (i = 0; i < n; i++)
    {
        if (arr[temNumber] < arr[i] && i!=largest_index)
        {
            temNumber =i; 
        }
    }
    return arr[temNumber];
}
int main(){
    int arr[] = {20, 5, 4, 8, 9, 60, 8, 12};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << secondLargestnumber(arr, n) << endl;
}