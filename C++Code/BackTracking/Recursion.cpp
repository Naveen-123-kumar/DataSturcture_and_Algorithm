#include<iostream>
using namespace std;
int func(int n){
    if(n==0){
        return 0;

    }
    else{
    return 1+func(n/2);

    }

}
int main(){
    cout<<func(8)<<endl;
    return 0;
}