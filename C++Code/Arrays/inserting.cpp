// #include <iostream>
// using namespace std;

// // Function to insert x in arr at position pos
// int* insertX(int n, int arr[],
// 			int x, int pos)
// {
// 	int i;

// 	// increase the size by 1
// 	n++;

// 	// shift elements forward
// 	for (i = n; i >= pos; i--)
// 		arr[i] = arr[i - 1];

// 	// insert x at pos
// 	arr[pos - 1] = x;

// 	return arr;
// }

// // Driver Code
// int main()
// {
// 	int arr[100] = { };
// 	int i, x, pos, n = 10;

// 	// initial array of size 10
// 	for (i = 0; i < 10; i++)
// 		arr[i] = i + 1;

// 	// print the original array
// 	for (i = 0; i < n; i++)
// 		cout << arr[i] << " ";
// 	cout << endl;

// 	// element to be inserted
// 	x = 50;

// 	// position at which element is to be inserted
// 	pos = 5;

// 	// Insert x at pos
// 	insertX(n, arr, x, pos);

// 	// print the updated array
// 	for (i = 0; i < n + 1; i++)
// 		cout << arr[i] << " ";
// 	cout << endl;

// 	return 0;
// }









#include <iostream>
using namespace std;
int* insertNumber(int arr[],int n,int number,int insert_pos)
{
    int i=0;
    n=n+1;
    for(i=n;i>=insert_pos;i--){
        arr[i]=arr[i-1];
    }
    arr[insert_pos-1]=number;
    return arr;
}
int main()
{
    int arr[100]={ };
    int n = 5;
    for (int i = 0; i < n; i++)
    {
       cout<<"enter input"<<endl;
        cin >>arr[i];        
    }
    int insert_pos=4;
    int number;
    cout<<"Enter the number that you want to insert: "<<endl;
    cin>>number;
    insertNumber(arr,n,number,insert_pos);
    for(int i=0;i<n+1;i++){
        cout<<arr[i]<<' ';
    }
    cout<<endl;
}