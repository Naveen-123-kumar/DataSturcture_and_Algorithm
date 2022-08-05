#include <iostream>
using namespace std;
// #define m 4
#define n 4
void Transpose(int r, int c, int arr[n][n], int tem[][n])
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            tem[j][i] = arr[i][j];
        }
    }
}
int main()
{
    int tem[n][n];
    int arr[n][n] = {{1, 2, 10, 100}, {3, 4, 11, 101}, {5, 6, 12, 102}, {2, 15, 84, 96}};
    Transpose(n, n, arr, tem);
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << tem[i][j] << " ";
        }
        cout << endl;
    }
}