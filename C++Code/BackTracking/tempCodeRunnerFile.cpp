#include<iostream>
using namespace std;
string subset(string s,string current="",int i){
    if(i==s.length()){
        cout<<current<<endl;
        return;
    }
    subset(s,current,i+1);
    subset(s,current+s[i],i+1);  
}
int main(){
    cout<<subset("naveen","",0)<<endl;
    return 0;
}