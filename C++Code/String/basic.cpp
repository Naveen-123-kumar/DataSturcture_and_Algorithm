#include<iostream>
using namespace std;
int main(){
    int A=65;
    cout<<char(A)<<endl;
    // char a[]="naveen kumar";
    string a="naveen";
    // int n=sizeof(a);
    int n=a.length();
    for(int i=n-1;i>=0;i--){
    cout<<a[i];
        
    }
    // cout<<'a'<<endl;
}