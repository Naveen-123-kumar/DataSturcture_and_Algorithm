#include<iostream>
using namespace std;
void reverseStr(string s,int n){
    string tem="";
    for(int i=n-1;i>=0;i--){
        tem=tem+s[i];
    }
    cout<<s.find("a")<<endl;
}
int main(){
    string s="kumar";
    int n=s.length();
    reverseStr(s,n);
}
