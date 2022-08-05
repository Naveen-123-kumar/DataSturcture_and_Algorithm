#include<iostream>
using namespace std;
void findSubString(string s,int n){
    string tem=s.substr(1);
    cout<<tem<<endl;
}
int main(){
    string s="naveen";
    int n=s.length();
    findSubString(s,n);

}