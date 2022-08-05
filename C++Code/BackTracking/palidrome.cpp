#include<iostream>
using namespace std;
bool palindrome(string str,int s,int end){
    if(s>=end){
        return true;
    }
    else{
        return (str[s]==str[end]) && palindrome(str,s+1,end-1);
    }
}
int main(){
    string str="aabaa";
    int n=str.length();
    if (palindrome(str, 0,n-1))
    cout << "Yes";
    else
    cout << "No";

return 0;
}