#include <iostream>
using namespace std;

int largestnumber(int arr[], int n)
{
    int i;
    int temNumber = arr[0];
    for (i = 1; i < n; i++)
    {
        if (temNumber < arr[i])
        {
            temNumber = arr[i];
        }
    }
    return temNumber;
}
int main()
{
    int arr[] = {20, 5, 4, 8, 9, 6, 8, 12};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << largestnumber(arr, n) << endl;
}