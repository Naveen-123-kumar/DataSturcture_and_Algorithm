#include<iostream>
using namespace std;
int sum(int n){
    if(n==1){
        return 1;
    }
    else{
        return n+sum(n-1);
    }
}
int main(){
    cout<<"sum of Natural is " <<sum(5)<<endl;
    return 0;
}