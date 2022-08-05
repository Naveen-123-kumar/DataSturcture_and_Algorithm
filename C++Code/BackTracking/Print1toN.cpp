#include<iostream>
using namespace std;
void printnumber(int n){
    if(n==0){
        return;
    }
    else{
        printnumber(n-1);
        cout<<n<<endl;
    }
}
int main(){
    printnumber(5);
    return 0;
}