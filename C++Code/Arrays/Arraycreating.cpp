#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter Size of The array"<<endl;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }

    cout<<"size of array is "<<n<<endl;
    
}