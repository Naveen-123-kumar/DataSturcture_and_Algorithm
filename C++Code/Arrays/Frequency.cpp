#include<iostream>
using namespace std;
void findFrequency(int arr[], int n)
{
    int i;
    for (i = 0; i < n; i++)
    {  
        int count = 1;
        int tem = arr[i];
        for (int j = i + 1; j < n; j++)
        {
            if (tem == arr[j])
            {
                count = count + 1;
                i++;
            }
        }
        cout << tem << "->";
        cout << count << endl;
    }
}
int main()
{
    int arr[] = {8, 9, 100, 200, 200, 200, 200};
    int n = sizeof(arr) / sizeof(arr[0]);
    findFrequency(arr, n);
}