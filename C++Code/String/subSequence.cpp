#include<iostream>
using namespace std;
bool findSubSequence(string s1,string s2,int n,int m){
    if(m==0){
        return true;
    }
    if(n==0){
        return false;
    }
    if(s1[n-1]==s2[m-1]){
        return findSubSequence(s1,s2,n-1,m-1);
    }
    else{
        return findSubSequence(s1,s2,n-1,m);
    }
}
int main(){
    string s1="naveen";
    string s2="naen";
    int n1=s1.length();
    int n2=s2.length();
    cout<<findSubSequence(s1,s2,n1,n2)<<endl;
}