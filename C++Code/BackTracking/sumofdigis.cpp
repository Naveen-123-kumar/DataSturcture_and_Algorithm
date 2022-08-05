#include<iostream>
using namespace std;
int sumofdigis(int n){
    if(n==0){
        return 0;
    }
    else{
        return n%10+sumofdigis(n/10);

    }
}

int main(){
    cout<<sumofdigis(10252)<<endl;
    return 0;
}