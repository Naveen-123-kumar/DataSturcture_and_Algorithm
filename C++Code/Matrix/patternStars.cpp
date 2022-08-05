#include<iostream>
using namespace std;
void printThePattern(int n){
    int i,j;
    for(i=1;i<=n;i++){
        for(j=i;j>=1;j--){
            cout<<"*"<<" ";
        }
        cout<<endl;
    }
     for(i=n-1;i>=1;i--){
        for(j=1;j<=i;j++){
            cout<<"*"<<" ";
        }
        cout<<endl;
    }
}
int main(){
    int n;
    cout<<"Enter the value of n"<<endl;
    cin>>n;
    printThePattern(n);
}