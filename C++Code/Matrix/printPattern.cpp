#include<iostream>
using namespace std;
void printThePattern(int n){
    int i,j;
    for(i=1;i<=n;i++){
        for(j=i;j>=1;j--){
            cout<<j<<" ";
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