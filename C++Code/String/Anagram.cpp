#include<iostream>
#include <bits/stdc++.h>
using namespace std;
bool Anaragam(string s1,string s2,int n,int m){
   
    if(n!=m){
        return false;
    }
    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());
 
    // Compare sorted strings
    for (int i = 0; i < n; i++)
        if (s1[i] != s2[i])
            return false;
 
    return true;
}
int main(){
    string s1="naveen";
    string s2="naenev";
    int n1=s1.length();
    int n2=s2.length();
    cout<<Anaragam(s1,s2,n1,n2)<<endl;
}