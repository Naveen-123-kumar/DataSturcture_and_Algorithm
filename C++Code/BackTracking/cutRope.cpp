#include<iostream>
using namespace std;
int max(int a, int b) { return (a > b)? a : b;}
int max(int a, int b, int c) { return max(a, max(b, c));}
int Count(int num,int a,int b,int c){
    if(num==0){
        return 0;
    }
    if(num<0){
        return -1;
    }
    int result=max(Count(num-a,a,b,c),Count(num-b,a,b,c),Count(num-c,a,b,c));
    if(result==-1){
        return -1;
    }
    else{
        return result+1;
    }
    
}
int main(){
    cout<<Count(25,12,5,13)<<endl;
    return 0;
}