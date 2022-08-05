#include<iostream>
using namespace std;
void merge(int arr[], int start, int mid, int end)
{
    int i = start;
    int j = mid + 1;
    int k = 0;
    int n = end - start + 1;
    int merged[n];
    while (i <= mid && j <= end)
    {
        if (arr[i] < arr[j])
        {
            merged[k++] = arr[i++];
        }
        else
        {
            merged[k++] = arr[j++];
        }
    }
    while (i <= mid)
    {
        merged[k++] = arr[i++];
    }
    while (j <= end)
    {
        merged[k++] = arr[j++];
    }
    int a=0;
    for(i=0;i<n;i++){
        arr[a++]=merged[i];
    }
}
void mergeSort(int arr[], int l, int r)
{
    if (l > r)
    {
        return;
    }
    int mid = (l + r)/2;
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
}
int main()
{
    int arr[] = {9, 1, 55, 3, 41, 44, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    mergeSort(arr, 0, n-1);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<endl;
    }
  
}